import { Currency, CurrencyAmount, Fraction, Percent, ETHER } from 'mojito-testnet-sdk'
import React from 'react'
import { Button, Text } from '../../uikit'
import { TranslateString } from 'utils/translateTextHelpers'
import { RowBetween, RowFixed } from '../../components/Row'
import CurrencyLogo from '../../components/CurrencyLogo'
import { Field } from '../../state/mint/actions'
import { SwapButton } from '../../components/Button'
import { ThroughLine } from '../Swap'
import { useTheme } from 'styled-components'


export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd,
  ACurrencyIsWKCS,
  BCurrencyIsWKCS
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
  ACurrencyIsWKCS?: boolean
  BCurrencyIsWKCS?: boolean
}) {
  const theme = useTheme()
  const BCurrency = BCurrencyIsWKCS ? ETHER : currencies[Field.CURRENCY_B]
  const ACurrency = ACurrencyIsWKCS ? ETHER : currencies[Field.CURRENCY_A]
  return (
    <>
      <RowBetween align="center">
        <Text fontSize="14px" color="textRemark">{ACurrency?.symbol} Deposited</Text>
        <RowFixed style={{ alignItems: 'center' }}>
          <CurrencyLogo size="24px" currency={ACurrency} style={{ marginRight: '8px' }} />
          <Text fontWeight={500} fontSize="14px">
            {parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Text fontSize="14px" color="textRemark">{BCurrency?.symbol} Deposited</Text>
        <RowFixed>
          <CurrencyLogo size="24px" currency={BCurrency} style={{ marginRight: '8px' }} />
          <Text fontWeight={500} fontSize="14px">
            {parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Text fontSize="14px" color="textRemark">Rates</Text>
        <Text fontSize="14px" color="text">
          {`1 ${ACurrency?.symbol} = ${price?.toSignificant(4)} ${
            BCurrency?.symbol
          }`}
        </Text>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <Text fontSize="14px" color="text">
          {`1 ${BCurrency?.symbol} = ${price?.invert().toSignificant(4)} ${
            ACurrency?.symbol
          }`}
        </Text>
      </RowBetween>
      <RowBetween>
        <Text fontSize="14px" color="textRemark">Share of Pool:</Text>
        <Text fontSize="14px" fontWeight={500} color="text">
          {noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%
        </Text>
      </RowBetween>
      <SwapButton mt="20px" onClick={onAdd} style={{background: theme.colors.primary, color: 'white'}}>
        {noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}
      </SwapButton>
    </>
  )
}

export default ConfirmAddModalBottom
