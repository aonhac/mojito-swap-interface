import styled from 'styled-components'

const Pane = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  padding: 16px;
`

export default Pane
