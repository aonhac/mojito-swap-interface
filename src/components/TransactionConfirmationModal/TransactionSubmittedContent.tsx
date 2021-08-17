import { ChainId } from 'mojito-sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, LinkExternal } from '../../uikit'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getKCCExplorerLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'
import { SwapButton } from '../Button'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Transaction submitted</ContentHeader>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={1} size={70} color={theme.colors.primary} />
        </ConfirmedIcon>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getKCCExplorerLink(chainId, hash, 'transaction')}>View on KCC Explorer</LinkExternal>
          )}
          <SwapButton style={{ height: '48px' }} onClick={onDismiss} mt="20px">
            Close
          </SwapButton>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
