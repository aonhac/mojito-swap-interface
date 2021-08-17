import styled from 'styled-components'

const SwapBg = require('../assets/images/trade-bg.png').default

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  background: url(${SwapBg}) top center no-repeat, #94b7b1;
  background-size: cover;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/arch-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.svg'),
    //   url('/images/left-pancake.svg'), url('/images/right-pancake.svg');
    background-size: cover;
    min-height: calc(100vh - 64px);
  }
`

export default Container
