import React from 'react'
import styled, { keyframes, DefaultTheme } from 'styled-components'
import { Text } from '../../../components/Text'
import { Colors } from '../../../theme/types'
import { MENU_ENTRY_HEIGHT } from '../config'

export interface Props {
  secondary?: boolean
  isActive?: boolean
  theme: DefaultTheme
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`

const LinkLabel = styled.div<{ isPushed: boolean; isActive: boolean }>`
  // color: ${({ isActive, isPushed, theme }) => theme.colors.primary};
  // color:${({ isActive, theme }) => (isActive ? `#5dda98` : '#000')};
  // color:'#000';
  transition: color 0.4s;
  flex-grow: 1;
`

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? '0 32px' : '0 16px')};
  font-size: ${({ secondary }) => (secondary ? '14px' : '16px')};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : 'transparent')};
//  color: ${({ theme }) => theme.colors.textSubtle};
  color:${({ isActive, theme }) => (isActive ? `#5dda98` : '#000')};
  box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : 'none')};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
}

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: ${({ theme, color }) => `2px solid${theme.colors[color]}`};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed)

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel }
