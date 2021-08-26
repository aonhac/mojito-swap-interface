import React from 'react'
import styled from 'styled-components'
import { Text } from 'uikit/components/Text'
import { useWeb3React } from '@web3-react/core'
import ClaimButton from './ClaimButton'
import { ClaimStatus } from './types'
import BN from 'bignumber.js'
import { useClaimCallback, useClaimed, useUserHasAvailableClaim, useUserUnclaimedAmount } from 'state/claim/hooks'
import { useUserClaimData } from '../../state/claim/hooks'

const ClaimWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const TextWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const NumberText = styled(Text)`
  color: #ff7b1b;
  font-size: 50px;
  font-weight: 800;
  font-family: 'SF Pro Display';
  margin-bottom: 10px;
  margin-left: 20px;
`

const ClaimAirdrop: React.FunctionComponent = () => {
  const { account, library } = useWeb3React()

  const [claimInfo, setClaimInfo] = React.useState<{
    text: string
    disabled: boolean
    status: ClaimStatus
    claimData: any
  }>({
    text: 'Claim Now!',
    disabled: true,
    status: ClaimStatus.NOBALANCE,
    claimData: null,
  })

  const getClaim = () => {
    console.log('gege')
  }

  const unclaimedAmount: any = useUserUnclaimedAmount(library)

  const hasAvailableClaim = useUserHasAvailableClaim(library)

  const userClaimData = useUserClaimData(account)

  const userCliamed = useClaimed(library)

  React.useMemo(() => {
    console.log(unclaimedAmount, hasAvailableClaim)
    console.log(userClaimData)
    if (hasAvailableClaim) {
      setClaimInfo((info) => {
        return {
          ...info,
          claimData: userClaimData,
          status: ClaimStatus.AVAILABLE,
          disabled: false,
          text: 'Claim Now !',
        }
      })
    } else if (userCliamed) {
      setClaimInfo((info) => {
        return {
          ...info,
          claimData: userClaimData,
          status: ClaimStatus.CLAIMED,
          disabled: true,
          text: '',
        }
      })
    }
  }, [unclaimedAmount, hasAvailableClaim, userClaimData, userCliamed])

  React.useEffect(() => {
    if (!account) {
      setClaimInfo(() => {
        return {
          text: 'Connect Wallet',
          disabled: false,
          status: ClaimStatus.NOCONNECT,
          claimData: null,
        }
      })
    }
  }, [account, setClaimInfo])

  // You have received：300MJT

  return (
    <ClaimWrap>
      {claimInfo.status === ClaimStatus.NOCONNECT ? (
        <TextWrap>
          <Text fontSize="24px" fontWeight={600}>
            Connect wallet to receive airdrop
          </Text>
        </TextWrap>
      ) : null}

      {claimInfo.status === ClaimStatus.AVAILABLE ? (
        <TextWrap>
          <Text fontSize="24px" fontWeight={600}>
            Your MJT Airdrop
          </Text>
          <NumberText>{userClaimData ? new BN(userClaimData?.amount).div(10 ** 18).toString(10) : 0}JT</NumberText>
        </TextWrap>
      ) : null}

      {claimInfo.status === ClaimStatus.CLAIMED ? (
        <TextWrap>
          <Text fontSize="24px" fontWeight={600}>
            You have received:
          </Text>
          <NumberText>{userClaimData ? new BN(userClaimData?.amount).div(10 ** 18).toString(10) : 0}MJT</NumberText>
        </TextWrap>
      ) : null}
      {userCliamed ? null : <ClaimButton claimInfo={claimInfo} setClaimInfo={setClaimInfo} />}
    </ClaimWrap>
  )
}

export default ClaimAirdrop
