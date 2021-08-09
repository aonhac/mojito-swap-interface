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
border: 2px solid #033A6E;
background: #043a6d;
background-size: auto 50%;
border-radius: 4px;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: flex;
font-size: 14px;
font-weight: bold;
height: 45px;
justify-content: center;
margin: 0px;
margin-left: 5px;
min-width: 36px;
width: 160px;
outline: none;
padding-left: 16px;
padding-right: 16px;
white-space: nowrap;
// display: inline-block;
&:hover{
    background: #2b4789;
    border: 1px solid #2b4789;
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
