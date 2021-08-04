import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const InfoIcon = require('../../../../assets/images/menu/InfoIcon.svg').default
const ActiveInfoIcon = require('../../../../assets/images/menu/ActiveInfoIcon.svg').default

const Svg = styled.img`
  width: 42px;
  height: 42px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveInfoIcon} />
  }
  return <Svg src={InfoIcon} />
}

export default Icon
