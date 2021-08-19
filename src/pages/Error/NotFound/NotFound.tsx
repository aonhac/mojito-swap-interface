import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../uikit'
import { SwapButton } from '../../../components/Button'
import { useHistory } from 'react-router-dom'

const HomeBg = require('../../../assets/images/background.png').default

const NotFound = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 64px);
  background: url(${HomeBg}) top center no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 480px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 18px;
  position: relative;
`

const LogoIcon = styled.img`
  margin-top: 30px;
  width: 80px;
  height: auto;
`

const Number404 = styled.div`
  margin-top: 0px;
  font-weight: bold;
  color: #5dda98;
  font-size: 20px;
`

const BuildImage = styled.img`
  margin-top: 0px;
  height: 120px;
`

export default function Notfound() {
  const history = useHistory()
  return (
    <NotFound>
      <Modal>
        <LogoIcon src={require('../../../assets/images/logo.svg').default} />
        <BuildImage
          src={require('../../../assets/images/build.svg').default}
          style={{ padding: '18px', marginBottom: '10px' }}
        />
        <Number404>Wait Building</Number404>
        <Text color="text" style={{ marginTop: '0px' }}>
          This page is under development.
        </Text>
        <SwapButton
          style={{ width: '100%', height: '60px', marginTop: '20px' }}
          onClick={() => {
            history.push('/home')
          }}
        >
          Back Home
        </SwapButton>
      </Modal>
    </NotFound>
  )
}
