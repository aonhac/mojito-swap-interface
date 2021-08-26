import styled from 'styled-components'
import { AutoColumn } from '../Column'
import { RowBetween, RowFixed } from '../Row'

export const FadedSpan = styled(RowFixed)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`

export const PaddedColumn = styled(AutoColumn)`
  padding: 20px;
  padding-bottom: 12px;
`

export const MenuItem = styled(RowBetween)`
  padding: 4px 20px;
  margin: 15px 0;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);
  grid-gap: 16px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  :hover {
    background-color: ${({ theme, disabled, selected }) => !disabled && !selected && theme.colors.backgroundHover};
  }
  opacity: ${({ disabled, selected }) => (disabled || selected ? 0.5 : 1)};
`

export const SearchInput = styled.input`
  position: relative;
  display: flex;
  padding: 15px 20px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  outline: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  -webkit-appearance: none;
  font-family: 'San Pro Display';

  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.borderDark};
  }
  transition: border 100ms;
  :focus {
    // background: #f2fff6;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    // border: none;
    outline: none;
  }
`
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
`

export const SeparatorDark = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`
