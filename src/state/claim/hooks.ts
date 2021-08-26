import { TokenAmount, ChainId, JSBI } from 'mojito-testnet-sdk'
import { TransactionResponse } from '@ethersproject/providers'
import { useEffect, useState } from 'react'
import { useActiveWeb3React } from '../../hooks'
import { getAirdropContract } from 'utils/contractHelpers'
import { useSingleCallResult } from '../multicall/hooks'
import { calculateGasMargin, isAddress } from '../../utils'
import { useTransactionAdder } from '../transactions/hooks'
import { BigNumber } from '@ethersproject/bignumber'
import tokens from 'constants/tokens'
import BN from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'

interface UserClaimData {
  index: number
  amount: string
  proof: string[]
  flags?: {
    isSOCKS: boolean
    isLP: boolean
    isUser: boolean
  }
}

const CLAIM_PROMISES: { [key: string]: Promise<UserClaimData | null> } = {}

// returns the claim for the given address, or null if not valid
function fetchClaim(account: string, chainId: ChainId): Promise<any> {
  const formatted = isAddress(account)
  if (!formatted) return Promise.reject(new Error('Invalid address'))
  const key = `${chainId}:${account}`

  // eslint-disable-next-line no-return-assign
  return (CLAIM_PROMISES[key] =
    CLAIM_PROMISES[key] ??
    fetch('https://api.mojitoswap.finance/v1/airdrop', {
      headers: {
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
      },
      body: JSON.stringify({ address: formatted }),
      method: 'POST',
    })
      .then(async (res) => {
        const r = await res.json()
        console.log('r', r)
        return r.code === 0 ? r.data : console.log(`No claim for account ${formatted}`)
      })
      .catch((error) => console.error('Failed to get claim data', error)))

  // eslint-disable-next-line no-return-assign
  // return (CLAIM_PROMISES[key] = CLAIM_PROMISES[key] ?? airdrop.claims[account])
}

// parse distributorContract blob and detect if user has claim data
// null means we know it does not
export function useUserClaimData(account: string | null | undefined): [UserClaimData | null | undefined, boolean] {
  const { chainId } = useActiveWeb3React()

  const key = `${chainId}:${account}`
  const [claimInfo, setClaimInfo] = useState<{ [key: string]: UserClaimData | null }>({})
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!account || !chainId) return
    fetchClaim(account, chainId).then((accountClaimInfo) => {
      setLoading(() => false)
      setClaimInfo((info) => {
        return {
          ...info,
          [key]: accountClaimInfo,
        }
      })
    })
  }, [account, chainId, key])

  return [account && chainId ? claimInfo[key] : undefined, loading]
}

export function useClaimed(library: any): [boolean, boolean] {
  const { account } = useWeb3React()
  const [userClaimData, loading] = useUserClaimData(account)
  const distributorContract = getAirdropContract(library)
  const claimed = useSingleCallResult(distributorContract, 'isClaimed', [userClaimData?.index])
  if (!userClaimData) {
    return [false, false]
  }
  return [claimed.result?.[0] === true, loading || claimed.loading]
}

// check if user is in blob and has not yet claimed UNI
export function useUserHasAvailableClaim(library: any): [boolean, boolean] {
  const { account } = useWeb3React()
  const [userClaimData, loading] = useUserClaimData(account)
  const distributorContract = getAirdropContract(library)
  const isClaimedResult = useSingleCallResult(distributorContract, 'isClaimed', [userClaimData?.index])

  // debugger

  // user is in blob and contract marks as unclaimed
  return [
    Boolean(userClaimData && !isClaimedResult.loading && isClaimedResult.result?.[0] === false),
    loading || isClaimedResult.loading,
  ]
}

export function useUserUnclaimedAmount(library: any): TokenAmount | undefined {
  const { chainId, account } = useActiveWeb3React()
  const [userClaimData, loading] = useUserClaimData(account)
  const canClaim = useUserHasAvailableClaim(library)

  // debugger

  const mjt = chainId ? tokens.mjt[chainId] : undefined
  if (!mjt) return undefined
  if (!canClaim || !userClaimData) {
    return new TokenAmount(mjt, JSBI.BigInt(0))
  }
  return new TokenAmount(mjt, JSBI.BigInt(userClaimData.amount))
}

export async function useValidClaim(library: any) {
  const contract = getAirdropContract(library)
  const deadline = await contract.methods.deadline().call()
  const now = new Date().getTime()
  const isOutdated = new BN(now).gte(new BN(`${deadline}000`))
  return !isOutdated
}

export function useClaimCallback(library?: any): {
  claimCallback: () => Promise<string>
} {
  // get claim data for this account
  const { chainId, account } = useActiveWeb3React()
  const [claimData, loading] = useUserClaimData(account)

  // used for popup summary
  const unclaimedAmount: TokenAmount | undefined = useUserUnclaimedAmount(library)
  const addTransaction = useTransactionAdder()
  const distributorContract = getAirdropContract(library)

  const claimCallback = async () => {
    if (!claimData || !account || !library || !chainId || !distributorContract) return

    const args = [claimData.index, account, claimData.amount, claimData.proof]

    // eslint-disable-next-line consistent-return
    return distributorContract.estimateGas.claim(...args, {}).then((estimatedGasLimit: BigNumber) => {
      return distributorContract
        .claim(...args, { value: null, gasLimit: calculateGasMargin(estimatedGasLimit) })
        .then((response: TransactionResponse) => {
          addTransaction(response, {
            summary: `Claimed ${unclaimedAmount?.raw.toString(10)} MJT`,
            claim: { recipient: account },
          } as any)
          return response.hash
        })
    })
  }

  return { claimCallback }
}
