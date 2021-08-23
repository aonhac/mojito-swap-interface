import React from 'react'
import { SvgProps } from '../types'
import styled from 'styled-components'

const LogoIcon = styled.img`
  border-radius: 50%;
`
const Icon: React.FC<SvgProps> = (props) => {
  return <LogoIcon {...props} src={require('../../../../assets/images/logo.svg').default} />
}

export default Icon
