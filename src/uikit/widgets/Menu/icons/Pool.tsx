import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const PoolIcon = require('../../../../assets/images/menu/Pool.svg').default
const ActivePoolIcon = require('../../../../assets/images/menu/ActivePool.svg').default

const Svg = styled.img`
  width: 50px;
  height: 60px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActivePoolIcon} />
  }
  return <Svg src={PoolIcon} />
}

export default Icon
