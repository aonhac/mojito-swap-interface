import React from 'react'
import { Button, ButtonProps, useWalletModal } from '../../uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'

const MojitoButton = styled(Button)`
  border-radius: 12px;
  height: 48px;
  font-size: 16px;
  color: #fff;
`

const UnlockButton: React.FC<any> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <MojitoButton onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </MojitoButton>
  )
}

export default UnlockButton
