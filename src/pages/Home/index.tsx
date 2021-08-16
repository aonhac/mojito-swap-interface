import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'
import Bar from './Bar'
import { RowBetween } from '../../components/Row'
import TVL from './TVL'
import Trade from './Trade'

const HomeBg = require('../../assets/images/background.png').default

const HomePageWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 64px);
  background: url(${HomeBg}) top center no-repeat;
  background-size: cover;
`

const HomeContentWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 914px;
  height: 175px;
`

const BrandWrap = styled.div`
  margin-top: 100px;
  background: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 175px;
  position: relative;
  box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  border-radius: 8px;
`
const CartoonLogo = styled.img`
  width: 172px;
  height: 222px;
  position: relative;
  bottom: 23px;
  left: 54px;
`

const MintImage = styled.img`
  width: 125px;
  height: 114px;
  position: relative;
  top: -70px;
  right: -24px;
`

const NameWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin-left: 90px;
  margin-right: 80px;
`

const TVLAndTradeWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`

const Margin = styled.div`
  height: 40px;
`

const index: FunctionComponent = (props) => {
  return (
    <HomePageWrap>
      <HomeContentWrap>
        <BrandWrap>
          <CartoonLogo src={require('../../assets/images/cow.png').default} />
          <NameWrap>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Text fontSize="28px" fontWeight={500} color="#000">
              Mojito Finance
            </Text>
            <Text fontSize="18px" fontWeight={400} color="#000" style={{ marginTop: '10px' }}>
              The #1 AMM and yield farm on KCC
            </Text>
          </NameWrap>
          <MintImage src={require('../../assets/images/mint.png').default} />
        </BrandWrap>

        <RowBetween style={{ marginTop: '46px', height: '474px' }}>
          <Bar />
          <TVLAndTradeWrap style={{ marginLeft: '32px' }}>
            <TVL />
            <Margin />
            <Trade />
          </TVLAndTradeWrap>
        </RowBetween>
      </HomeContentWrap>
    </HomePageWrap>
  )
}

export default index
