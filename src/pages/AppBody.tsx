import React from 'react'
import styled from 'styled-components'
import { Card } from '../uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 588px;
  width: 100%;
  z-index: 5;
  border-radius: 24px;
  box-shadow: 0 2px 15px 0 rgba(223, 229, 216, 1);
  box-sizing: border-box;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
