import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const HomeIcon = require('../../../../assets/images/menu/home_b.svg').default
const ActiveHomeIcon = require('../../../../assets/images/menu/home_g.svg').default

const Svg = styled.img`
  width: 32px;
  height: 32px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveHomeIcon} />
  }
  return <Svg src={HomeIcon} />
}

export default Icon
