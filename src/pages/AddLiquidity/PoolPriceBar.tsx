import React from 'react'
import { Currency, Percent, Price, ETHER } from 'mojito-testnet-sdk'
import { Text } from '../../uikit'
import { AutoColumn } from '../../components/Column'
import { AutoRow } from '../../components/Row'
import { ONE_BIPS } from '../../constants'
import { Field } from '../../state/mint/actions'
import styled, { useTheme } from 'styled-components'

const Line = styled.div`
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  width: 1px;
`

export function PoolPriceBar({
  currencies,
  noLiquidity,
  poolTokenPercentage,
  price,
  ACurrencyIsWKCS,
  BCurrencyIsWKCS
}: {
  currencies: { [field in Field]?: Currency }
  noLiquidity?: boolean
  poolTokenPercentage?: Percent
  price?: Price
  ACurrencyIsWKCS?: boolean
  BCurrencyIsWKCS?: boolean
}) {
  const theme = useTheme()
  const BCurrencySymbol = BCurrencyIsWKCS ? ETHER.symbol : currencies[Field.CURRENCY_B]?.symbol
  const ACurrencySymbol = ACurrencyIsWKCS ? ETHER.symbol : currencies[Field.CURRENCY_A]?.symbol
  return (
    <AutoColumn gap="md">
      <AutoRow justify="space-around" gap="4px">
        <AutoColumn justify="center">
          <Text fontSize="16px" fontWeight={800} color={theme.colors.primary}>
            {price?.toSignificant(6) ?? '-'}
          </Text>
          <Text fontSize="14px" fontWeight={400} color="textRemark" pt={1}>
            {BCurrencySymbol} per {ACurrencySymbol}
          </Text>
        </AutoColumn>
        <AutoColumn justify="center">
          <Text fontSize="16px" fontWeight={800} color={theme.colors.primary}>
            {price?.invert()?.toSignificant(6) ?? '-'}
          </Text>
          <Text fontSize="14px" fontWeight={400} color="textRemark" pt={1}>
            {ACurrencySymbol} per {BCurrencySymbol}
          </Text>
        </AutoColumn>
        <AutoColumn justify="center">
          <Text fontSize="16px" fontWeight={800} color={theme.colors.primary}>
            {noLiquidity && price
              ? '100'
              : (poolTokenPercentage?.lessThan(ONE_BIPS) ? '<0.01' : poolTokenPercentage?.toFixed(2)) ?? '0'}
            %
          </Text>
          <Text fontSize="14px" fontWeight={400} color="textRemark" pt={1}>
            Share of Pool
          </Text>
        </AutoColumn>
      </AutoRow>
    </AutoColumn>
  )
}

export default PoolPriceBar
