import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'
import { withRouter, useHistory } from 'react-router-dom'
import Row from 'components/Row'

interface OwnProps {
  TranslateString: any
}

type Props = OwnProps

const NoLiquidityWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const SwapIcon = styled.img`
  height: 110px;
  width: 60px;
`
const TextWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`

const LinkButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 47px;
  padding: 0 10px;
  border-radius: 7px;
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  color: ${({ theme }) => `${theme.colors.primary}`};
`

const NoLiquidity: FunctionComponent<Props> = ({ TranslateString }) => {
  const history = useHistory()
  return (
    <NoLiquidityWrap>
      <SwapIcon src={require('../../assets/images/cup.svg').default} />
      <TextWrap>
        <Text color="textRemark" textAlign="center" style={{ marginTop: '16px' }}>
          {TranslateString(104, 'No liquidity found.')}
        </Text>
      </TextWrap>
    </NoLiquidityWrap>
  )
}

export default withRouter<any, any>(NoLiquidity)
