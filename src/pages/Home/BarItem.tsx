import React from 'react'
import { Pair } from 'mojito-testnet-sdk'
import { Text } from '../../uikit'
import { RowBetween, RowFixed } from '../../components/Row'
import styled, { useTheme } from 'styled-components'
import { useTotalSupply } from '../../data/TotalSupply'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import { DoubleHomeLogo } from '../../components/DoubleLogo'
import { GreyTitle, PrimaryTitleMD, GradientBtn } from './styles';
import { AutoColumn } from '../../components/Column/index';
import { RowFlat } from '../../components/Row/index';

const BarItemWarp = styled.div<{ index: number; }>`
  background: #FFFEFE;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 32px 24px;
  width: 356px;
  margin-top: 24px;
  margin-right: ${({ index }) => ((index + 1) % 3 === 0) ? `0` : '24px'};
`


export function BarItem({
  pair,
  row,
}: {
  pair: Pair
  row: number
}) {
  const theme = useTheme()
  const currency0 = unwrappedToken(pair.token0)
  const currency1 = unwrappedToken(pair.token1)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)
  
  return ( 
    <BarItemWarp index={row}>
      <RowFixed>
        <DoubleHomeLogo currency0={currency0} currency1={currency1} margin size={48} />
        <AutoColumn>
          <PrimaryTitleMD style={{color: theme.colors.text}}>{currency0.symbol}-{currency1.symbol}</PrimaryTitleMD>
          <GreyTitle style={{fontSize: '14px', marginTop: '3px'}}>Liquidity {totalPoolTokens?.toSignificant(4)}</GreyTitle>
        </AutoColumn>
      </RowFixed>
      <RowBetween style={{marginTop: '18px', alignItems: 'flex-end'}}>
        <RowFlat>
          <PrimaryTitleMD style={{color: theme.colors.text, fontSize: '16px', marginRight: '8px'}}>APR</PrimaryTitleMD>
          <Text fontSize="28px" fontWeight="800" color="#FF7B1B" lineHeight="1">300.00 %</Text>
        </RowFlat>
        <GradientBtn style={{width: '125px', height: '41px', fontSize: '16px'}}>Drink Now</GradientBtn>
      </RowBetween>
    </BarItemWarp>
  )
}

export default BarItem
