import React from 'react'
import styled from 'styled-components'
import { Text } from 'uikit/components/Text'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { Modal, useWalletModal } from 'uikit'
import { useUserClaimData, useClaimCallback, useUserHasAvailableClaim, useUserUnclaimedAmount } from 'state/claim/hooks'

import { ClaimStatus } from './types'
import { useIsTransactionPending } from 'state/transactions/hooks'
import TransactionConfirmationModal, {
  ConfirmationModalContent,
  ConfirmationPendingContent,
  TransactionSubmittedContent,
} from 'components/TransactionConfirmationModal'

interface ClaimButtonProps {
  claimInfo: {
    text: string
    disabled: boolean
    status: ClaimStatus
  }
  setClaimInfo: any
}

const ClaimStyledButton = styled.div<{ disabled: boolean }>`
  width: 240px;
  background: linear-gradient(90deg, #ffc961 0%, #fc9c47 100%);
  opacity: ${({ disabled }) => {
    if (disabled) {
      return 0.5
    }
    return 1
  }};

  box-shadow: 0px 18px 36px rgba(253, 167, 78, 0.4);
  border-radius: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => {
    if (disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  height: 64px !important;
`

const ClaimText = styled(Text)`
  font-family: 'mojitofont';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  height: 64px;
  line-height: 64px;
  text-align: justify;
  color: #ffffff;
  text-shadow: 0px 3px 2px #ff891d;
`

const ClaimButton: React.FunctionComponent<ClaimButtonProps> = ({ claimInfo, setClaimInfo }) => {
  const { account, library, chainId } = useWeb3React()
  const { login, logout } = useAuth()

  const { onPresentConnectModal } = useWalletModal(login, logout, account as any)

  // used for UI loading states
  const [attempting, setAttempting] = React.useState<boolean>(false)

  // monitor the status of the claim from contracts and txns
  const { claimCallback } = useClaimCallback(library)
  const [hash, setHash] = React.useState<string | undefined>()

  const [pendingText, setPendingText] = React.useState<string>('Confirm transaction')

  // monitor the status of the claim from contracts and txns
  const claimPending = useIsTransactionPending(hash ?? '')
  const claimConfirmed = hash && !claimPending

  function onClaim() {
    setAttempting(true)
    claimCallback()
      .then((h) => {
        setHash(h)
      })
      // reset modal and log error
      .catch((error) => {
        setAttempting(false)
        console.log(error)
      })
  }

  const claim = async () => {
    switch (claimInfo.status) {
      case ClaimStatus.NOCONNECT:
        onPresentConnectModal()
        break
      case ClaimStatus.AVAILABLE:
        onClaim()
        break
    }
  }

  return (
    <ClaimStyledButton disabled={claimInfo.disabled} onClick={claim}>
      <TransactionConfirmationModal
        isOpen={attempting}
        onDismiss={() => {
          setAttempting(false)
        }}
        hash={hash}
        pendingText={pendingText}
        attemptingTxn={true}
        content={(<Text>hhelo</Text>) as any}
      />
      <ClaimText>{claimInfo.text}</ClaimText>
    </ClaimStyledButton>
  )
}

export default ClaimButton
