import React, { FunctionComponent } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text } from '../../uikit'

const TradeBg = require('../../assets/images/trade-bg.svg').default

const TradeWrap = styled.div`
  justify-self: stretch;
  align-self: stretch;
  width: 100%;
  background: url(${TradeBg}) 330px -20px no-repeat, #fff;
  // box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  border-radius: 8px;
  flex: 1;
`

const TitleWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 33px;
  color: #fff;
`

const Cup = styled.img`
  width: 39px;
  margin-right: 20px;
`
const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Trade: FunctionComponent = (props) => {
  const theme = useTheme()
  return (
    <TradeWrap>
      <TitleWrap>
        <Cup src={require('../../assets/images/trade.svg').default} />
        <Text fontSize="24px" color="primary" fontWeight={700}>
          Trade
        </Text>
      </TitleWrap>
      <Content>
        <Text fontWeight={700} color="textSubtle">
          Comming
        </Text>
        <Text fontWeight={700} color="textSubtle">
          Soon
        </Text>
      </Content>
    </TradeWrap>
  )
}

export default Trade
