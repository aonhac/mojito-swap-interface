import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, CloseIcon } from '../../uikit'
import { AutoColumn, ColumnCenter } from '../Column'

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  border-right: 4px;
`
export const Section = styled(AutoColumn)`
  padding: 23px;
`

export const ConfirmedIcon = styled(ColumnCenter)`
  padding: 40px 0;
`

export const BottomSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

/**
 * TODO: Remove this when modal system from the UI Kit is implemented
 */
const StyledContentHeader = styled.div`
  align-items: center;
  display: flex;
  margin-top: -10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #97979740;
  & > ${Heading} {
    flex: 1;
  }
`

type ContentHeaderProps = {
  children: ReactNode
  onDismiss: () => void
}

export const ContentHeader = ({ children, onDismiss }: ContentHeaderProps) => (
  <StyledContentHeader>
    <Heading style={{ fontWeight: 700 }}>{children}</Heading>
    <IconButton onClick={onDismiss} variant="text">
      <CloseIcon color="#737E8D" height="25px" width="25px"/>
    </IconButton>
  </StyledContentHeader>
)
