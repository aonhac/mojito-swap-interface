import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'

const BarWrap = styled.div`
  justify-self: stretch;
  align-self: stretch;
  width: 100%;
  background: #fff;
  // box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  border-radius: 8px;
  background: #5dda98;
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
        <Cup src={require('../../assets/images/whitecup.svg').default} style={{ fill: '#fff' }} />
        <Text fontSize="24px" color="#fff" fontWeight={700}>
          Bar
        </Text>
      </TitleWrap>
      <Content>
        <Text style={{ marginTop: '100px' }} fontSize="24px" fontWeight={700} color="#fff" fontFamily="SF Pro Display">
          Comming
        </Text>
        <Text fontSize="24px" fontWeight={700} color="#fff">
          Soon
        </Text>
      </Content>
    </BarWrap>
  )
}

export default Bar
