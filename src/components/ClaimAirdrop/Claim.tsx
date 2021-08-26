import React from 'react'
import styled from 'styled-components'
import { Text } from 'uikit/components/Text'
import { useWeb3React } from '@web3-react/core'
import ClaimButton from './ClaimButton'
import { ClaimStatus } from './types'
import BN from 'bignumber.js'
import { useClaimed, useUserHasAvailableClaim, useUserUnclaimedAmount } from 'state/claim/hooks'
import { useUserClaimData } from '../../state/claim/hooks'

const ClaimWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 160px;
`

const TextWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
`

const NumberText = styled(Text)`
  color: #ff7b1b;
  font-size: 50px;
  font-weight: 800;
  font-family: 'mojitofont-bold';
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

  const unclaimedAmount: any = useUserUnclaimedAmount(library)

  const [hasAvailableClaim, availableLoading] = useUserHasAvailableClaim(library)

  const [userClaimData, userClaimDataLoading] = useUserClaimData(account)

  const [userCliamed, claimedLoading] = useClaimed(library)

  const queryAirdropLoading = React.useMemo(() => {
    return availableLoading || claimedLoading || userClaimDataLoading
  }, [availableLoading, claimedLoading, userClaimDataLoading])

  React.useMemo(() => {
    console.log(unclaimedAmount, hasAvailableClaim)
    console.log(userClaimData)

    if (!account) {
      setClaimInfo(() => {
        return {
          text: 'Connect Wallet',
          disabled: false,
          status: ClaimStatus.NOCONNECT,
          claimData: null,
        }
      })
    } else if (hasAvailableClaim) {
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
    } else {
      setClaimInfo((info) => {
        return {
          ...info,
          claimData: userClaimData,
          status: ClaimStatus.NOBALANCE,
          disabled: true,
          text: 'Claim Now !',
        }
      })
    }
  }, [unclaimedAmount, hasAvailableClaim, userClaimData, userCliamed, account])

  // You have received：300MJT

  return (
    <ClaimWrap>
      {queryAirdropLoading && account ? (
        <TextWrap>
          <Text fontSize="24px" fontWeight={600}>
            Loading...
          </Text>
        </TextWrap>
      ) : null}

      {(claimInfo.status === ClaimStatus.NOCONNECT && !queryAirdropLoading) || !account ? <TextWrap /> : null}

      {claimInfo.status === ClaimStatus.NOBALANCE && !queryAirdropLoading ? (
        <TextWrap>
          <Text fontSize="24px" fontWeight={600}>
            Your MJT Airdrop:
          </Text>
          <NumberText fontWeight={800}>0 MJT</NumberText>
        </TextWrap>
      ) : null}

      {claimInfo.status === ClaimStatus.AVAILABLE && !queryAirdropLoading ? (
        <TextWrap>
          <Text fontSize="24px" fontWeight={600}>
            Your MJT Airdrop
          </Text>
          <NumberText fontWeight={800}>
            {userClaimData ? new BN(userClaimData?.amount).div(10 ** 18).toString(10) : 0} MJT
          </NumberText>
        </TextWrap>
      ) : null}

      {claimInfo.status === ClaimStatus.CLAIMED && !queryAirdropLoading ? (
        <TextWrap style={{ marginTop: '40px' }}>
          <Text fontSize="24px" fontWeight={600}>
            You have received:
          </Text>
          <NumberText fontWeight={800}>
            {userClaimData ? new BN(userClaimData?.amount).div(10 ** 18).toString(10) : 0} MJT
          </NumberText>
        </TextWrap>
      ) : null}
      {(userCliamed || queryAirdropLoading) && account ? null : (
        <ClaimButton claimInfo={claimInfo} setClaimInfo={setClaimInfo} />
      )}
    </ClaimWrap>
  )
}

export default ClaimAirdrop
