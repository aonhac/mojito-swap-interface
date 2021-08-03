import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'

const TVLWrap = styled.div`
  width: 426px;
  height: 175px;
  background: linear-gradient(135deg, #38b0da 0%, #5dda98 100%);
  box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  padding-left: 32px;
`

const TVL: FunctionComponent = (props) => {
  return (
    <TVLWrap>
      <Text color="#fff" fontSize="24px" fontWeight={500}>
        Total Value Locked (TVL)
      </Text>
      <Text color="#fff" fontSize="28px" fontWeight={500} style={{ marginTop: '22px' }}>
        $ 11,000
      </Text>
    </TVLWrap>
  )
}

export default TVL
