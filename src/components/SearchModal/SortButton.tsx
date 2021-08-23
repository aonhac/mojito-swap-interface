import React from 'react'
import { Text } from '../../uikit'
import styled from 'styled-components'
import { RowFixed } from '../Row'

export const FilterWrapper = styled(RowFixed)`
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  user-select: none;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  & > * {
    user-select: none;
  }
  :hover {
    cursor: pointer;
    background: #EAEAEA;
    border-radius: 6px; 
  }
`

export default function SortButton({
  toggleSortOrder,
  ascending
}: {
  toggleSortOrder: () => void
  ascending: boolean
}) {
  return (
    <FilterWrapper onClick={toggleSortOrder}>
      <Text fontSize="14px">{ascending ? '↑' : '↓'}</Text>
    </FilterWrapper>
  )
}
