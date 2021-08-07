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
  margin-left: 10px;
  width: auto;
  height: 36px;
  border-radius: 4px;
  background: #5dda98;
  padding: 0 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Kanit', sans-serif;
  border: 1px solid #5dda98;
   &:hover {
    color: #53eb96;
    background: #044f97;
    border: 1px solid #043a6d;
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
