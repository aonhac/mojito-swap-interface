import React from 'react'
import styled from 'styled-components'

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
`
const CardContent: React.FC = ({ children }) => <StyledCardContent>{children}</StyledCardContent>

export default CardContent
