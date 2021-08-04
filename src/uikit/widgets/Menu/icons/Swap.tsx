import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const SwapIcon = require('../../../../assets/images/menu/SwapIcon.svg').default
const ActiveSwapIcon = require('../../../../assets/images/menu/ActiveSwapIcon.svg').default

const Svg = styled.img`
  width: 42px;
  height: 42px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveSwapIcon} />
  }
  return <Svg src={SwapIcon} />
}

export default Icon
