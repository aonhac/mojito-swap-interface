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
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  background-size: auto 50%;
  border-radius: 8px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  justify-content: center;
  margin: 0px;
  margin-left: 18px;
  min-width: 36px;
  width: 140px;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  white-space: nowrap;
  // display: inline-block;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
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
          {accountEllipsis}
        </ConnectButton>
      ) : (
        <ConnectButton
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect Wallet
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
