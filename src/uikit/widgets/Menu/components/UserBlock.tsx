import React from 'react'
import Button from '../../../components/Button/Button'
import { useWalletModal } from '../../WalletModal'
import { Login } from '../../WalletModal/types'
import styled from 'styled-components'

interface Props {
  account?: string
  login: Login
  logout: () => void
}

const ConnectButton = styled.div`
  align-items: center;
  // background: ${({ theme }) => theme.colors.primary};
  border-radius: 18px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 36px;
  justify-content: center;
  margin: 0px;
  margin-left: 18px;
  min-width: 36px;
  width: 140px;
  outline: none;
  white-space: nowrap;
  // display: inline-block;
  background: linear-gradient(115deg, #94b7b1, rgb(7, 188, 113), #3bd590, #009c7e, #96c766);

  &:hover {
    //background: ${({ theme }) => theme.colors.primary};
    // border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

const ConnectButtonText = styled.div`
  height: 32px;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.primary};
  background: #fff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 136px;
  opacity: 0.97;
  &:hover {
    opacity: 0.8;
  }
`

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <>
      {account ? (
        <ConnectButton
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          <ConnectButtonText>{accountEllipsis}</ConnectButtonText>
        </ConnectButton>
      ) : (
        <ConnectButton
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          <ConnectButtonText> Connect Wallet</ConnectButtonText>
        </ConnectButton>
      )}
    </>
  )
}

export default React.memo(
  UserBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
    prevProps.login === nextProps.login &&
    prevProps.logout === nextProps.logout
)
