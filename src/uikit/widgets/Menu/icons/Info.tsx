import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const InfoIcon = require('../../../../assets/images/menu/info_b.svg').default
const ActiveInfoIcon = require('../../../../assets/images/menu/info_g.svg').default

const Svg = styled.img`
  width: 32px;
  height: 32px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveInfoIcon} />
  }
  return <Svg src={InfoIcon} />
}

export default Icon
