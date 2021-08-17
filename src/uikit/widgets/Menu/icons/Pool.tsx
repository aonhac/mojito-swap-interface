import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const PoolIcon = require('../../../../assets/images/menu/pool_b.svg').default
const ActivePoolIcon = require('../../../../assets/images/menu/pool_g.svg').default

const Svg = styled.img`
  width: 26px;
  height: 26px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActivePoolIcon} />
  }
  return <Svg src={PoolIcon} />
}

export default Icon
