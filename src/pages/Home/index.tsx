import React, { FunctionComponent } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text } from '../../uikit'
import { RowBetween } from '../../components/Row'

import Banner from './Banner'
import Airdrop from './Airdrop'
import Trade from './Trade'
import Bar from './Bar'

const HomeBg = require('../../assets/images/trade-bg.png').default

const HomePageWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 48px);
  background: url(${HomeBg}) top center no-repeat, #94b7b1;
  background-size: cover;
`

const HomeContentWrap = styled.div`
  margin: 0 auto; 
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 40px;
  max-width: 1200px;
`


const index: React.FunctionComponent = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme()
  return (
    <>
      <Banner />
      <Airdrop />
      <HomePageWrap>
        <HomeContentWrap>
          <Trade />
          <Bar/>
        </HomeContentWrap>
      </HomePageWrap>
    </>
  )
}

export default index
