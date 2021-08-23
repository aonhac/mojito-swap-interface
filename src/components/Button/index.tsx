import { Button } from '../../uikit'
import styled from 'styled-components'

export const SwapButton = styled(Button)`
  border-radius: 12px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  color: ${({ theme }) => `${theme.colors.primary}`};
  border: ${({ theme }) => `1px solid  ${theme.colors.primary}`};
  box-shadow: none;
`
