import React, { FunctionComponent, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { Pair } from 'mojito-testnet-sdk'
import { Text } from '../../uikit'
import { AutoColumn } from 'components/Column'
import { AutoRow, RowBetween, RowFixed } from 'components/Row'
import { DarkGreyTitle, PrimaryTitleMD } from './styles'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'

import BarItem from './BarItem'

const ImgArrow = require('../../assets/images/home/upArrow.png').default

const UpArrow = styled.img`
  width: 16px;
  margin-left: 6px;
`

const Panel = styled.div`
  background: #fffefe;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 24px 32px;
`

const StatusPanel = styled(Panel)`
  width: 527px;
  height: 308px;
  margin-top: 36px;
`
const TvlPanel = styled(Panel)`
  width: 551px;
  height: 142px;
  background: linear-gradient(90deg, #fc9c47 0%, #ffc961 100%);
`

const VolumePanel = styled(TvlPanel)`
  background: white;
`

const Bar: FunctionComponent = (props) => {
  const theme = useTheme()
  const trackedTokenPairs = useTrackedTokenPairs()
  const { account } = useActiveWeb3React()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  )
  const [v2PairsBalances] = useTokenBalancesWithLoadingIndicator(account ?? undefined, liquidityTokens)
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  const StatItem = (title: string, content: string | number) => {
    return (
      <RowBetween>
        <DarkGreyTitle>{title}</DarkGreyTitle>
        <Text fontSize="14px" color={theme.colors.text}>
          {content}
        </Text>
      </RowBetween>
    )
  }

  return (
    <>
      <Text fontWeight="700" fontSize="32px" mt="64px" color={theme.colors.text}>
        Top Bars
      </Text>
      <Text fontSize="16px" color={`${theme.colors.textTips}80`}>
        Select some bars for you.Don’t you come for drink
      </Text>
      <AutoRow>
        {/* todo: replace liquidityList to real data */}
        {allV2PairsWithLiquidity?.length > 0
          ? [0, 1, 2].map((item) => {
              return <BarItem key={item} row={item} pair={allV2PairsWithLiquidity[0]} />
            })
          : null}
      </AutoRow>
      <RowBetween style={{ flexWrap: 'wrap' }}>
        <StatusPanel>
          <AutoColumn gap="15px">
            <PrimaryTitleMD style={{ color: theme.colors.text }}>MJT Stat</PrimaryTitleMD>
            {StatItem('Market Cap', '$ 120,222,111.00')}
            {StatItem('Total Minted', '146,900.00')}
            {StatItem('Total Burned', '146,900.00')}
            {StatItem('Circulating Supply', '146,900.00')}
            {StatItem('New MJT/block', '1000')}
            {StatItem('Max Supply', '5,000,000.00')}
          </AutoColumn>
        </StatusPanel>
        <AutoColumn gap="24px">
          <TvlPanel style={{ marginTop: '36px' }}>
            <AutoColumn gap="sm">
              <PrimaryTitleMD
                style={{
                  color: theme.colors.invertedContrast,
                  fontSize: '14px',
                }}
              >
                Total Value Lock (TVL)
              </PrimaryTitleMD>
              <PrimaryTitleMD
                style={{
                  color: theme.colors.invertedContrast,
                  fontSize: '32px',
                }}
              >
                $ 300,000.00
              </PrimaryTitleMD>
              <PrimaryTitleMD
                style={{
                  color: theme.colors.invertedContrast,
                  fontSize: '14px',
                }}
              >
                Across all LPs and Wine Pools
              </PrimaryTitleMD>
            </AutoColumn>
          </TvlPanel>
          <VolumePanel>
            <AutoColumn gap="sm">
              <PrimaryTitleMD
                style={{
                  color: theme.colors.text,
                  fontSize: '14px',
                }}
              >
                Volume (24 h)
              </PrimaryTitleMD>
              <PrimaryTitleMD
                style={{
                  color: theme.colors.text,
                  fontSize: '32px',
                }}
              >
                $ 300,000.00
              </PrimaryTitleMD>
              <RowFixed>
                <PrimaryTitleMD
                  style={{
                    fontSize: '16px',
                  }}
                >
                  +15.56%
                </PrimaryTitleMD>
                <UpArrow src={ImgArrow} />
              </RowFixed>
            </AutoColumn>
          </VolumePanel>
        </AutoColumn>
      </RowBetween>
    </>
  )
}

export default Bar
