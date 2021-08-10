import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'

const BarWrap = styled.div`
  justify-self: stretch;
  align-self: stretch;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  border-radius: 8px;
`

const TitleWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 33px;
  color: #fff;
`

const Cup = styled.img`
  width: 21px;
  height: 39px;
  margin-right: 20px;
`
const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 350px;
  width: 100%;
`

const Bar: FunctionComponent = (props) => {
  return (
    <BarWrap>
      <TitleWrap>
        <Cup src={require('../../assets/images/whitecup.svg').default} style={{fill:'#5DDA98'}} />
        <Text fontSize="20px" color="#000" fontWeight={500} fontFamily='font-family: Kanit, sans-serif;'>
          Bar
        </Text>
      </TitleWrap>
      <Content>
        <Text style={{ marginTop: '100px' }} fontSize="24px" fontWeight={500} color="#fff" fontFamily='font-family: Kanit, sans-serif;'>
          Comming
        </Text>
        <Text fontSize="24px" fontWeight={500} color="#fff" fontFamily='font-family: Kanit, sans-serif;'>
          Soon
        </Text>
      </Content>
    </BarWrap>
  )
}

export default Bar
