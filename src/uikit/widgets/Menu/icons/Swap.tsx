import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const SwapIcon = require('../../../../assets/images/menu/trade_b.svg').default
const ActiveSwapIcon = require('../../../../assets/images/menu/trade_g.svg').default

const Svg = styled.img`
  width: 26px;
  height: 26px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveSwapIcon} />
  }
  return <Svg src={SwapIcon} />
}

export default Icon
