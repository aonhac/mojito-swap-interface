import React, { useState } from 'react'
import { JSBI, Pair, Percent } from 'mojito-testnet-sdk'
import { Button, Card as UIKitCard, CardBody, Text } from '../../uikit'
import { darken } from 'polished'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Link, useHistory } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { useTotalSupply } from '../../data/TotalSupply'

import { useActiveWeb3React } from '../../hooks'
import { useTokenBalance } from '../../state/wallet/hooks'
import { currencyId } from '../../utils/currencyId'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import Card from '../Card'
import { AutoColumn } from '../Column'
import CurrencyLogo from '../CurrencyLogo'
import DoubleCurrencyLogo from '../DoubleLogo'
import Row, { RowBetween, RowFixed } from '../Row'
import { Dots } from '../swap/styleds'
import { SwapButton } from '../Button'
import { variant } from '../../uikit/components/Skeleton/types'

export const FixedHeightRow = styled(RowBetween)`
  height: 12px;
`

export const HoverCard = styled(Card)`
  border: 1px solid ${({ theme }) => darken(0.15, theme.colors.invertedContrast)};
  border-radius: 12px;
  user-select: none;
`

export const CardBtn = styled(Button)`
  height: 48px;
  width: 100%;
  background: ${({ theme }) => theme.colors.invertedContrast};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  box-shadow: none;
`

interface PositionCardProps {
  pair: Pair
  // eslint-disable-next-line react/no-unused-prop-types
  showUnwrapped?: boolean
  // eslint-disable-next-line react/no-unused-prop-types
  removeOnly?: boolean
}

export function MinimalPositionCard({ pair, showUnwrapped = false }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const theme = useTheme()

  const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0)
  const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <>
      {userPoolBalance && (
        <UIKitCard style={{ background: 'rgba(255,255,255,0.9)', borderRadius: '16px', width: '400px' }}>
          <Text
            style={{
              padding: 0,
              width: '100%',
              height: '40px',
              lineHeight: '50px',
              textTransform: 'uppercase',
              fontWeight: 500,
              textAlign: 'center',
              color: `${theme.colors.text}`,
            }}
            fontSize="16px"
            color="text"
          >
            LP Tokens in your Wallet
          </Text>

          <CardBody style={{ width: '100%' }}>
            <AutoColumn gap="12px" style={{ width: '100%', padding: '0px 20px 20px 20px' }}>
              <FixedHeightRow onClick={() => setShowMore(!showMore)}>
                <RowFixed>
                  <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin size={24} />
                  <Text fontSize="14px" fontWeight={500} color="text">
                    {currency0.symbol}/{currency1.symbol}
                  </Text>
                </RowFixed>
                <RowFixed>
                  <Text fontSize="14px" color={theme.colors.textSubtle} fontWeight={500}>
                    {userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}
                  </Text>
                </RowFixed>
              </FixedHeightRow>
              <AutoColumn gap="4px">
                <FixedHeightRow>
                  <Text fontSize="14px" fontWeight={500}>
                    {currency0.symbol}:
                  </Text>
                  {token0Deposited ? (
                    <RowFixed>
                      <Text ml="6px" color="textSubtle" fontSize="14px" fontWeight={500}>
                        {token0Deposited?.toSignificant(6)}
                      </Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text fontSize="14px" fontWeight={500}>
                    {currency1.symbol}:
                  </Text>
                  {token1Deposited ? (
                    <RowFixed>
                      <Text ml="6px" fontSize="14px" color="textSubtle" fontWeight={500}>
                        {token1Deposited?.toSignificant(6)}
                      </Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
              </AutoColumn>
            </AutoColumn>
          </CardBody>
        </UIKitCard>
      )}
    </>
  )
}

export default function FullPositionCard({ pair, removeOnly }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const history = useHistory()

  const theme = useTheme()

  const currency0 = unwrappedToken(pair.token0)
  const currency1 = unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined
 
  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <HoverCard style={{ width: '100%' }}>
      <AutoColumn gap="10px" style={{ width: '100%' }}>
        <FixedHeightRow onClick={() => setShowMore(!showMore)} style={{ cursor: 'pointer' }}>
          <RowFixed>
            <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin size={24} />
            <Text fontSize="16px" style={{ color: `${theme.colors.text}`, fontWeight: 500 }}>
              {!currency0 || !currency1 ? <Dots>Loading</Dots> : `${currency0.symbol}/${currency1.symbol}`}
            </Text>
          </RowFixed>
          <RowFixed style={{ justifySelf: 'flex-end' }}>
            {showMore ? (
              <ChevronUp size="20" style={{ marginLeft: '10px' }} />
            ) : (
              <ChevronDown size="20" style={{ marginLeft: '10px' }} />
            )}
          </RowFixed>
        </FixedHeightRow>
        {showMore && (
          <>
            <FixedHeightRow style={{ margin: '10px 0 0 0' }}>
              <Row>
                <Text color={theme.colors.text} fontSize="16px" style={{ fontWeight: 500, marginRight: '5px' }}>Pool tokens</Text>
                <Text color={theme.colors.primary} fontSize="16px" style={{ fontWeight: 700 }}>
                  {userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}
                </Text>
              </Row>
            </FixedHeightRow>
            <AutoColumn 
              gap="20px" 
              style={{ 
                padding: '24px',
                marginTop: '5px',
                background: `${theme.colors.backgroundCard}`,
                borderRadius: '8px',
              }}>
              <FixedHeightRow> 
                <RowFixed>
                  <Text fontSize="14px" style={{ fontWeight: 500 }}>
                    Pooled {currency0.symbol}:
                  </Text>
                </RowFixed>
                {token0Deposited ? (
                  <RowFixed>
                    <Text fontSize="14px" color={theme.colors.textRemark} style={{ fontWeight: 500 }} ml="6px">
                      {token0Deposited?.toSignificant(6)}
                    </Text>
                  </RowFixed>
                ) : (
                  '-'
                )}
              </FixedHeightRow>

              <FixedHeightRow>
                <RowFixed>
                  <Text fontSize="14px" style={{ fontWeight: 500 }}>
                    Pooled {currency1.symbol}:
                  </Text>
                </RowFixed>
                {token1Deposited ? (
                  <RowFixed>
                    <Text fontSize="14px" color={theme.colors.textRemark} style={{ fontWeight: 500 }} ml="6px">
                      {token1Deposited?.toSignificant(6)}
                    </Text>
                  </RowFixed>
                ) : (
                  '-'
                )}
              </FixedHeightRow>
              <FixedHeightRow>
                <Text fontSize="14px" style={{ fontWeight: 500 }}>
                  Your pool share:
                </Text>
                <Text fontSize="14px" color={theme.colors.textRemark} style={{ fontWeight: 500 }}>
                  {poolTokenPercentage ? `${poolTokenPercentage.toFixed(2)}%` : '-'}
                </Text>
              </FixedHeightRow>
            </AutoColumn>
            <RowBetween marginTop="10px">
              {removeOnly && (
                <CardBtn
                  as={Link}
                  to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
                >
                  Add
                </CardBtn>
              )}
              <CardBtn
                as={Link}
                to={`/remove/${currencyId(currency0)}/${currencyId(currency1)}`}
              >
                Remove
              </CardBtn>
            </RowBetween>
            <AutoColumn justify="center" style={{ cursor: 'pointer', marginTop: '10px' }}>
              <Text
                fontSize="16px"
                color={theme.colors.primary}
                onClick={() => {
                  history.push(`/add/${pair.token0.address}/${pair.token1.address}`)
                }}
              >
                + Add liquidity instead
              </Text>
            </AutoColumn>
          </>
        )}
      </AutoColumn>
    </HoverCard>
  )
}
