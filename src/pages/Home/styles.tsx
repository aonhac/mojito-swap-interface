import styled from 'styled-components'
import { Text, Button } from '../../uikit'

export const DarkGreyTitle = styled(Text)`
  color: #12192D99;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
`

export const GreyTitle = styled(Text)`
  color: #12192D61;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
`

export const PrimaryTitleMD = styled(Text)`
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
`

export const GradientBtn = styled(Button)`
  background: linear-gradient(90deg, #FFEFC6 0%, #A8F2DC 100%);
  border-radius: 30px;
  width: 120px;
  height: 41px;
  box-shadow: none;
  color: ${({ theme }) => `${theme.colors.text}`};
  font-size: 16px;
  font-weight: 700;
`

