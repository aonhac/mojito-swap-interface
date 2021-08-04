import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const BarIcon = require('../../../../assets/images/menu/BarIcon.svg').default
const ActiveBarIcon = require('../../../../assets/images/menu/ActiveBarIcon.svg').default

const Svg = styled.img`
  width: 50px;
  height: 50px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveBarIcon} />
  }
  return <Svg src={BarIcon} />
}

export default Icon
