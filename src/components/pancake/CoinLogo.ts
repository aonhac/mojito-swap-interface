import styled from 'styled-components'
import Logo from '../Logo'

const CoinLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: #999999;
`

export default CoinLogo
