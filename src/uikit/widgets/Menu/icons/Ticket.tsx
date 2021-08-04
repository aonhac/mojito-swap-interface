import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const TicketIcon = require('../../../../assets/images/menu/TicketIcon.svg').default
const ActiveTicketIcon = require('../../../../assets/images/menu/ActiveTicketIcon.svg').default

const Svg = styled.img`
  width: 34px;
  height: 34px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveTicketIcon} />
  }
  return <Svg src={TicketIcon} />
}

export default Icon
