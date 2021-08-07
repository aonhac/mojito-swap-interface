import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'
import CountUp from 'react-countup';

const TVLWrap = styled.div`
  width: 426px;
  height: 130px;
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
      <Text color="#fff" fontSize="18px" fontWeight={500}>
        Total Value Locked (TVL)
      </Text>
      <Text color="#fff" fontSize="28px" fontWeight={600} style={{ marginTop: '10px' }}>
        {/* $ <CountUp start={0} end={39824} separator="," duration="5" decimal="."  decimals="1" prefix="$" suffix="+"/> */}
        $ 100000
      </Text>
    </TVLWrap>
  )
}

export default TVL
