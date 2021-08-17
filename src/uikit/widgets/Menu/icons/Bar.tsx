import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const BarIcon = require('../../../../assets/images/menu/bar_b.svg').default
const ActiveBarIcon = require('../../../../assets/images/menu/bar_g.svg').default

const Svg = styled.img`
  width: 32px;
  height: 32px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveBarIcon} />
  }
  return <Svg src={BarIcon} />
}

export default Icon
