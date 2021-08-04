import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const HomeIcon = require('../../../../assets/images/menu/HomeIcon.svg').default
const ActiveHomeIcon = require('../../../../assets/images/menu/ActiveHomeIcon.svg').default

const Svg = styled.img`
  width: 42px;
  height: 42px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveHomeIcon} />
  }
  return <Svg src={HomeIcon} />
}

export default Icon
