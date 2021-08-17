import React from 'react'
import { SvgProps } from '../../../components/Svg'
import styled from 'styled-components'

const TicketIcon = require('../../../../assets/images/menu/ticket_b.svg').default
const ActiveTicketIcon = require('../../../../assets/images/menu/ticket_g.svg').default

const Svg = styled.img`
  width: 32px;
  height: 32px;
`

const Icon: React.FC<SvgProps> = (props) => {
  if (props?.isActive) {
    return <Svg src={ActiveTicketIcon} />
  }
  return <Svg src={TicketIcon} />
}

export default Icon
