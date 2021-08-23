import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Pair } from 'mojito-testnet-sdk'
import { Button, CardBody, Text } from '../../uikit'
import CardNav from 'components/CardNav'
import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { StyledInternalLink } from 'components/Shared'
import { LightCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'
import Container from 'components/Container'

import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { Dots } from 'components/swap/styleds'
import useI18n from 'hooks/useI18n'
import PageHeader from 'components/PageHeader'
import { Link, useHistory } from 'react-router-dom'
import AppBody from '../AppBody'
import NoLiquidity from './NoLiquidity'
import Row from 'components/Row'

const AddIcon = styled.img`
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
`

const NoLiquuidityNotice = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #033a6e;
`
const FindButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  height: 34px;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 14px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`


const Line = styled.div`
  width: 100%;
  opacity: 0.18;
  padding: 0 30px;
  box-sizing: content-box;
  margin-left: -30px;
  border: 1px solid #979797;
`

export default function Pool() {
  const theme = useContext(ThemeContext)
  const history = useHistory()
  const { account } = useActiveWeb3React()
  const TranslateString = useI18n()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  )
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  return (
    <Container>
      <CardNav activeIndex={1} />
      <AppBody>
        <PageHeader
          title={TranslateString(262, 'Liquidity')}
          description={TranslateString(1168, 'Add liquidity to receive LP tokens')}
        />
        <AutoColumn gap="lg" justify="center" style={{ width: '100%' }}>
          <CardBody style={{ width: '100%' }}>
            <AutoColumn gap="12px" style={{ width: '100%' }}>
              <Row padding="0 8px" align="center" justifyContent="flex-start">
                <Text color={theme.colors.text}>{TranslateString(107, 'Your Liquidity')}</Text>
                <Question
                  text={TranslateString(
                    1170,
                    'When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.'
                  )}
                />
              </Row>

              {!account ? (
                <LightCard padding="20px" style={{ background: '#F4F3F3', height: '120px', borderRadius: '12px' }}>
                  <Text color="textRemark" fontSize="14px" textAlign="center" style={{ lineHeight: '70px' }}>
                    {TranslateString(156, 'Connect to a wallet to view your liquidity.')}
                  </Text>
                </LightCard>
              ) : v2IsLoading ? (
                <LightCard padding="20px">
                  <Text color="textDisabled" textAlign="center">
                    <Dots>Loading</Dots>
                  </Text>
                </LightCard>
              ) : allV2PairsWithLiquidity?.length > 0 ? (
                <LightCard padding="0 10px 10px 10px" style={{ borderRadius: '12px' }}>
                  {allV2PairsWithLiquidity.map((v2Pair) => (
                    <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                  <Line style={{marginTop: '30px'}}/>
                  <NoLiquuidityNotice>
                    <Text
                      width="auto"
                      color={theme.colors.textRemark}
                      fontWeight="500"
                      fontSize="14px"
                      style={{ padding: '.5rem 0 .5rem 0' }}
                    >
                      {TranslateString(106, "Don't see a pool you joined?")}
                    </Text>
                    <FindButton
                      onClick={() => {
                        history.push('/find')
                      }}
                    >
                      {TranslateString(106, 'Find Other LP tokens')}
                    </FindButton>
                  </NoLiquuidityNotice>
                </LightCard>
              ) : (
                // no liquidity found
                <LightCard padding="40px">
                  <NoLiquidity TranslateString={TranslateString} />
                  <Row>
                    <Text color="textDisabled" fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                      {TranslateString(106, "Don't see a pool you joined?")}
                    </Text>
                    <Text
                      fontSize="14px"
                      style={{ marginLeft: '7px' }}
                      color="primary"
                      onClick={() => {
                        history.push('/find')
                      }}
                    >
                      {TranslateString(106, 'Find Other LP tokens')}
                    </Text>
                  </Row>
                  <Line />
                </LightCard>
              )}
            </AutoColumn>
          </CardBody>
        </AutoColumn>
        <Button
          id="join-pool-button"
          as={Link}
          to="/add/KCS"
          style={{ margin: '-20px 5% 20px', borderRadius: '12px', width: '90%', height: '48px', fontSize: '18px' }}
        >
          {TranslateString(168, 'Add Liquidity')}
        </Button>
      </AppBody>
    </Container>
  )
}
