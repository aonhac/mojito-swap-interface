import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Trade, TradeType } from 'mojito-testnet-sdk'
import { Button, Text } from '../../uikit'
import { ArrowDown, AlertTriangle } from 'react-feather'
import { Field } from '../../state/swap/actions'
import { isAddress, shortenAddress } from '../../utils'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown, warningSeverity } from '../../utils/prices'
import { AutoColumn } from '../Column'
import CurrencyLogo from '../CurrencyLogo'
import { RowBetween, RowFixed } from '../Row'
import { SwapShowAcceptChanges } from './styleds'

const PriceInfoText = styled(Text)`
  line-height: 1.7;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`

const IconBg = styled(RowBetween)`
  background: #F5F5F5;
  border-radius: 8px;
  padding: 10px 15px;
`

export default function SwapModalHeader({
  trade,
  allowedSlippage,
  recipient,
  showAcceptChanges,
  onAcceptChanges,
}: {
  trade: Trade
  allowedSlippage: number
  recipient: string | null
  showAcceptChanges: boolean
  onAcceptChanges: () => void
}) {
  const slippageAdjustedAmounts = useMemo(
    () => computeSlippageAdjustedAmounts(trade, allowedSlippage),
    [trade, allowedSlippage]
  )
  const { priceImpactWithoutFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee)

  const theme = useContext(ThemeContext)

  return (
    <AutoColumn gap="md" justify="center" style={{ marginTop: '20px' }}>
      <IconBg align="flex-end">
        <RowFixed gap="0px">
          <CurrencyLogo currency={trade.inputAmount.currency} size="24px" style={{ marginRight: '12px' }} />
          <Text fontSize="14px" style={{ marginLeft: '10px', fontWeight: 500 }}>
            {trade.inputAmount.currency.symbol}
          </Text> 
        </RowFixed>
        <RowFixed gap="0px">
          <Text
            fontSize="14px"
            color={showAcceptChanges && trade.tradeType === TradeType.EXACT_OUTPUT ? theme.colors.primary : 'text'}
          >
            {trade.inputAmount.toSignificant(6)}
          </Text>
        </RowFixed>
      </IconBg> 
      <RowFixed>
        <ArrowDown size="16" color={theme.colors.textSubtle} style={{ marginLeft: '4px', minWidth: '16px' }} />
      </RowFixed>
      <IconBg align="flex-end">
        <RowFixed gap="0px">
          <CurrencyLogo currency={trade.outputAmount.currency} size="24px" style={{ marginRight: '12px' }} />
          <Text fontSize="14px" style={{ marginLeft: '10px', fontWeight: 500 }}>
            {trade.outputAmount.currency.symbol}
          </Text>
        </RowFixed>
        <RowFixed gap="0px">
          <Text
            fontSize="14px"
            style={{ marginLeft: '10px', fontWeight: 500 }}
            color={
              priceImpactSeverity > 2
                ? theme.colors.failure
                : showAcceptChanges && trade.tradeType === TradeType.EXACT_INPUT
                ? theme.colors.primary
                : 'text'
            }
          >
            {trade.outputAmount.toSignificant(6)}
          </Text>
        </RowFixed>
      </IconBg>
      {showAcceptChanges ? (
        <SwapShowAcceptChanges justify="flex-start" gap="0px" style={{width: '100%'}}>
          <RowBetween>
            <RowFixed>
              <AlertTriangle size={20} style={{ marginRight: '8px', minWidth: 24 }} />
              <Text color="primary"> Price Updated</Text>
            </RowFixed>
            <Button onClick={onAcceptChanges} style={{borderRadius: '12px'}}>Accept</Button>
          </RowBetween>
        </SwapShowAcceptChanges>
      ) : null}
      <AutoColumn justify="flex-start" gap="sm" style={{ padding: '15px 20px', background: '#F5F5F5', borderRadius: '8px', marginTop: '10px' }}>
        {trade.tradeType === TradeType.EXACT_INPUT ? (
          <PriceInfoText>
            {`Output is estimated. You will receive at least `}
            <span>
              {slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(6)} {trade.outputAmount.currency.symbol}
            </span>
            {' or the transaction will revert.'}
          </PriceInfoText>
        ) : (
          <PriceInfoText>
            {`Input is estimated. You will sell at most `}
            <span>
              {slippageAdjustedAmounts[Field.INPUT]?.toSignificant(6)} {trade.inputAmount.currency.symbol}
            </span>
            {' or the transaction will revert.'}
          </PriceInfoText>
        )}
      </AutoColumn>
      {recipient !== null ? (
        <AutoColumn justify="flex-start" gap="sm" style={{ padding: '16px 0 0' }}>
          <Text>
            Output will be sent to{' '}
            <b title={recipient}>{isAddress(recipient) ? shortenAddress(recipient) : recipient}</b>
          </Text>
        </AutoColumn>
      ) : null}
    </AutoColumn>
  )
}
