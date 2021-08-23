import React, { useCallback, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import { Currency, currencyEquals, ETHER, TokenAmount, WETH } from 'mojito-testnet-sdk'
import { Button, CardBody, AddIcon, Text as UIKitText } from '../../uikit'
import { RouteComponentProps } from 'react-router-dom'
import { LightCard } from 'components/Card'
import { AutoColumn, ColumnCenter } from 'components/Column'
import TransactionConfirmationModal, { ConfirmationModalContent } from 'components/TransactionConfirmationModal'
import CardNav from 'components/CardNav'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import DoubleCurrencyLogo from 'components/DoubleLogo'
import { AddRemoveTabs } from 'components/NavigationTabs'
import { MinimalPositionCard } from 'components/PositionCard'
import Row, { RowBetween, RowFlat } from 'components/Row'

import { PairState } from 'data/Reserves'
import { useActiveWeb3React } from 'hooks'
import { useCurrency } from 'hooks/Tokens'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { Field } from 'state/mint/actions'
import { useDerivedMintInfo, useMintActionHandlers, useMintState } from 'state/mint/hooks'

import { useTransactionAdder } from 'state/transactions/hooks'
import { useIsExpertMode, useUserDeadline, useUserSlippageTolerance } from 'state/user/hooks'
import { calculateGasMargin, calculateSlippageAmount, getRouterContract } from 'utils'
import { maxAmountSpend } from 'utils/maxAmountSpend'
import { wrappedCurrency, unwrappedToken } from 'utils/wrappedCurrency'
import { currencyId } from 'utils/currencyId'
import Pane from 'components/Pane'
import Container from 'components/Container'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useI18n from 'hooks/useI18n'
import AppBody from '../AppBody'
import { Dots, Wrapper } from '../Pool/styleds'
import { ConfirmAddModalBottom } from './ConfirmAddModalBottom'
import { PoolPriceBar } from './PoolPriceBar'
import { ROUTER_ADDRESS } from '../../constants'
import styled, { useTheme } from 'styled-components'

const SwapButton = styled(Button)`
  border-radius: 12px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
`

export default function AddLiquidity({
  match: {
    params: { currencyIdA, currencyIdB },
  },
  history,
}: RouteComponentProps<{ currencyIdA?: string; currencyIdB?: string }>) {
  const theme = useTheme()
  const { account, chainId, library } = useActiveWeb3React()
  const currencyA = useCurrency(currencyIdA)
  const currencyB = useCurrency(currencyIdB)
  const TranslateString = useI18n()

  const oneCurrencyIsWKCS = Boolean(
    chainId &&
      ((currencyA && currencyEquals(currencyA, WETH[chainId])) ||
        (currencyB && currencyEquals(currencyB, WETH[chainId])))
  )

  const ACurrencyIsWKCS = Boolean(
    chainId &&
      (currencyA && currencyEquals(currencyA, WETH[chainId]))
  )

  const BCurrencyIsWKCS = Boolean(
    chainId &&
      (currencyB && currencyEquals(currencyB, WETH[chainId]))
  )

  const expertMode = useIsExpertMode()


  // mint state
  const { independentField, typedValue, otherTypedValue } = useMintState()
  const {
    dependentField,
    currencies,
    pair,
    pairState,
    currencyBalances,
    parsedAmounts,
    price,
    noLiquidity,
    liquidityMinted,
    poolTokenPercentage,
    error,
  } = useDerivedMintInfo(currencyA ?? undefined, currencyB ?? undefined)
  const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity)
  const isValid = !error

  // modal and loading
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm

  // txn values
  const [deadline] = useUserDeadline() // custom from users settings
  const [allowedSlippage] = useUserSlippageTolerance() // custom from users
  const [txHash, setTxHash] = useState<string>('')

  // get formatted amounts
  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      }
    },
    {}
  )

  const atMaxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0'),
      }
    },
    {}
  )

  // check whether the user has approved the router on the tokens
  const [approvalA, approveACallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_A], ROUTER_ADDRESS)
  const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], ROUTER_ADDRESS)

  const addTransaction = useTransactionAdder()

  async function onAdd() {
    if (!chainId || !library || !account) return
    const router = getRouterContract(chainId, library, account)

    const { [Field.CURRENCY_A]: parsedAmountA, [Field.CURRENCY_B]: parsedAmountB } = parsedAmounts
    if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB) {
      return
    }

    const amountsMin = {
      [Field.CURRENCY_A]: calculateSlippageAmount(parsedAmountA, noLiquidity ? 0 : allowedSlippage)[0],
      [Field.CURRENCY_B]: calculateSlippageAmount(parsedAmountB, noLiquidity ? 0 : allowedSlippage)[0],
    }

    const deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline

    let estimate
    let method: (...args: any) => Promise<TransactionResponse>
    let args: Array<string | string[] | number>
    let value: BigNumber | null
    if (currencyA === ETHER || currencyB === ETHER) {
      console.log('has kcs')

      const tokenBIsKCS = currencyB === ETHER
      estimate = router.estimateGas.addLiquidityETH
      method = router.addLiquidityETH
      args = [
        wrappedCurrency(tokenBIsKCS ? currencyA : currencyB, chainId)?.address ?? '', // token
        (tokenBIsKCS ? parsedAmountA : parsedAmountB).raw.toString(), // token desired
        amountsMin[tokenBIsKCS ? Field.CURRENCY_A : Field.CURRENCY_B].toString(), // token min
        amountsMin[tokenBIsKCS ? Field.CURRENCY_B : Field.CURRENCY_A].toString(), // eth min
        account,
        deadlineFromNow,
      ]
      value = BigNumber.from((tokenBIsKCS ? parsedAmountB : parsedAmountA).raw.toString())
    } else {
      console.log('don"t has kcs')
      estimate = router.estimateGas.addLiquidity
      method = router.addLiquidity
      args = [
        wrappedCurrency(currencyA, chainId)?.address ?? '',
        wrappedCurrency(currencyB, chainId)?.address ?? '',
        parsedAmountA.raw.toString(),
        parsedAmountB.raw.toString(),
        amountsMin[Field.CURRENCY_A].toString(),
        amountsMin[Field.CURRENCY_B].toString(),
        account,
        deadlineFromNow,
      ]
      value = null
    }

    // eslint-disable-next-line no-debugger

    setAttemptingTxn(true)
    // const aa = await estimate(...args, value ? { value } : {})
    await estimate(...args, value ? { value } : {})
      .then((estimatedGasLimit) =>
        method(...args, {
          ...(value ? { value } : {}),
          gasLimit: calculateGasMargin(estimatedGasLimit),
        }).then((response) => {
          setAttemptingTxn(false)

          addTransaction(response, {
            summary: `Add ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(3)} ${
              currencies[Field.CURRENCY_A]?.symbol
            } and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(3)} ${currencies[Field.CURRENCY_B]?.symbol}`,
          })

          setTxHash(response.hash)
        })
      )
      .catch((e) => {
        setAttemptingTxn(false)
        // we only care if the error is something _other_ than the user rejected the tx
        if (e?.code !== 4001) {
          console.error(e)
        }
      })
  }

  const modalHeader = () => {
    return noLiquidity ? (
      <AutoColumn gap="0px">
        <LightCard mt="20px" borderRadius="20px">
          <RowFlat style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <UIKitText fontSize="28px" mr="0px" fontWeight={600}>
              {`${currencies[Field.CURRENCY_A]?.symbol}/${currencies[Field.CURRENCY_B]?.symbol}`}
            </UIKitText>
            <DoubleCurrencyLogo
              currency0={currencies[Field.CURRENCY_A]}
              currency1={currencies[Field.CURRENCY_B]}
              size={28}
            />
          </RowFlat>
        </LightCard>
      </AutoColumn>
    ) : (
      <AutoColumn gap="20px">
        <RowFlat style={{ marginTop: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
          <UIKitText fontSize="36px" mr="8px" fontWeight={800}>
            {liquidityMinted?.toSignificant(6)}
          </UIKitText>
          <DoubleCurrencyLogo
            currency0={currencies[Field.CURRENCY_A]}
            currency1={currencies[Field.CURRENCY_B]}
            size={36}
          />
        </RowFlat>
        <Row>
          <UIKitText fontSize="16px" color="text">
            {`${currencies[Field.CURRENCY_A]?.symbol}/${currencies[Field.CURRENCY_B]?.symbol} Pool Tokens`}
          </UIKitText>
        </Row>
        <UIKitText small textAlign="left" padding="20px" style={{ background: '#F5F5F5' }}>
          {`Output is estimated. If the price changes by more than ${
            allowedSlippage / 100
          }% your transaction will revert.`}
        </UIKitText>
      </AutoColumn>
    )
  }

  const modalBottom = () => {
    return (
      <ConfirmAddModalBottom
        price={price}
        currencies={currencies}
        parsedAmounts={parsedAmounts}
        noLiquidity={noLiquidity}
        onAdd={onAdd}
        poolTokenPercentage={poolTokenPercentage}
      />
    )
  }

  const pendingText = `Supplying ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)} ${
    currencies[Field.CURRENCY_A]?.symbol
  } and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)} ${currencies[Field.CURRENCY_B]?.symbol}`

  const handleCurrencyASelect = useCallback(
    (currA: Currency) => {
      const newCurrencyIdA = currencyId(currA)
      if (newCurrencyIdA === currencyIdB) {
        history.push(`/add/${currencyIdB}/${currencyIdA}`)
      } else {
        history.push(`/add/${newCurrencyIdA}/${currencyIdB}`)
      }
    },
    [currencyIdB, history, currencyIdA]
  )
  const handleCurrencyBSelect = useCallback(
    (currB: Currency) => {
      const newCurrencyIdB = currencyId(currB)
      if (currencyIdA === newCurrencyIdB) {
        if (currencyIdB) {
          history.push(`/add/${currencyIdB}/${newCurrencyIdB}`)
        } else {
          history.push(`/add/${newCurrencyIdB}`)
        }
      } else {
        history.push(`/add/${currencyIdA || 'KCS'}/${newCurrencyIdB}`)
      }
    },
    [currencyIdA, history, currencyIdB]
  )

  const handleDismissConfirmation = useCallback(() => {
    setShowConfirm(false)
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onFieldAInput('')
    }
    setTxHash('')
  }, [onFieldAInput, txHash])
  
  return (
    <Container>
      <CardNav activeIndex={1} />
      <AppBody>
        <AddRemoveTabs adding />
        <Wrapper>
          <TransactionConfirmationModal
            isOpen={showConfirm}
            onDismiss={handleDismissConfirmation}
            attemptingTxn={attemptingTxn}
            hash={txHash}
            content={() => (
              <ConfirmationModalContent
                title={
                  noLiquidity
                    ? TranslateString(1154, 'You are creating a pool')
                    : TranslateString(1156, 'You will receive')
                }
                onDismiss={handleDismissConfirmation}
                topContent={modalHeader}
                bottomContent={modalBottom}
              />
            )}
            pendingText={pendingText}
          />
          <CardBody>
            <AutoColumn gap="20px">
              {noLiquidity && (
                <ColumnCenter>
                  <Pane style={{ background: '#F5F5F5', border: 'none' }}>
                    <AutoColumn gap="6px">
                      <UIKitText>{TranslateString(1158, 'You are the first liquidity provider.')}</UIKitText>
                      <UIKitText>
                        {TranslateString(1160, 'The ratio of tokens you add will set the price of this pool.')}
                      </UIKitText>
                      <UIKitText>
                        {TranslateString(1162, 'Once you are happy with the rate click supply to review.')}
                      </UIKitText>
                    </AutoColumn>
                  </Pane>
                </ColumnCenter>
              )}
              <CurrencyInputPanel
                value={formattedAmounts[Field.CURRENCY_A]}
                onUserInput={onFieldAInput}
                onMax={() => { 
                  onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toExact() ?? '')
                }}
                onCurrencySelect={handleCurrencyASelect}
                showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
                currency={ACurrencyIsWKCS ? ETHER : currencies[Field.CURRENCY_A]}
                id="add-liquidity-input-tokena"
                showCommonBases={false}
                styles={{ background: '#ffffff', borderRadius: '12px', border: `1px solid rgba(115,126,141,0.16)`  }}
              />
              <ColumnCenter>
                <AddIcon color="primary" />
              </ColumnCenter>
              <CurrencyInputPanel
                value={formattedAmounts[Field.CURRENCY_B]}
                onUserInput={onFieldBInput}
                onCurrencySelect={handleCurrencyBSelect}
                onMax={() => {
                  onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '')
                }}
                showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
                currency={BCurrencyIsWKCS ? ETHER : currencies[Field.CURRENCY_B]}
                id="add-liquidity-input-tokenb"
                showCommonBases={false}
                styles={{ background: '#ffffff', borderRadius: '12px', border: `1px solid rgba(115,126,141,0.16)` }}
              />
              {currencies[Field.CURRENCY_A] && currencies[Field.CURRENCY_B] && pairState !== PairState.INVALID && (
                <div
                  style={{
                    background: `#fff`,
                    padding: '20px 0',
                    border: '1px solid rgba(115,126,141,0.16)',
                    borderRadius: '12px',
                  }}
                >
                  <UIKitText
                    style={{ textTransform: 'uppercase', fontWeight: 500, textAlign: 'center' }}
                    color="text"
                    fontSize="16px"
                    mb="2px"
                  >
                    {noLiquidity
                      ? TranslateString(1164, 'Initial prices and pool share')
                      : TranslateString(1166, 'Prices and pool share')}
                  </UIKitText>
                  <Pane style={{ border: 'none' }}>
                    <PoolPriceBar
                      currencies={currencies}
                      poolTokenPercentage={poolTokenPercentage}
                      noLiquidity={noLiquidity}
                      price={price}
                    />
                  </Pane>
                </div>
              )}
              {!account ? (
                <ConnectWalletButton width="100%" />
              ) : (
                <AutoColumn gap="md">
                  {(approvalA === ApprovalState.NOT_APPROVED ||
                    approvalA === ApprovalState.PENDING ||
                    approvalB === ApprovalState.NOT_APPROVED ||
                    approvalB === ApprovalState.PENDING) &&
                    isValid && (
                      <RowBetween>
                        {approvalA !== ApprovalState.APPROVED && (
                          <SwapButton
                            onClick={approveACallback}
                            disabled={approvalA === ApprovalState.PENDING}
                            style={{ width: approvalB !== ApprovalState.APPROVED ? '48%' : '100%' }}
                          >
                            {approvalA === ApprovalState.PENDING ? (
                              <Dots>Approving {currencies[Field.CURRENCY_A]?.symbol}</Dots>
                            ) : (
                              `Approve ${currencies[Field.CURRENCY_A]?.symbol}`
                            )}
                          </SwapButton>
                        )}
                        {approvalB !== ApprovalState.APPROVED && (
                          <SwapButton
                            onClick={approveBCallback}
                            disabled={approvalB === ApprovalState.PENDING}
                            style={{ width: approvalA !== ApprovalState.APPROVED ? '48%' : '100%' }}
                          >
                            {approvalB === ApprovalState.PENDING ? (
                              <Dots>Approving {currencies[Field.CURRENCY_B]?.symbol}</Dots>
                            ) : (
                              `Approve ${currencies[Field.CURRENCY_B]?.symbol}`
                            )}
                          </SwapButton>
                        )}
                      </RowBetween>
                    )}
                  <SwapButton
                    onClick={() => {
                      if (expertMode) {
                        onAdd()
                      } else {
                        setShowConfirm(true)
                      }
                    }}
                    disabled={!isValid || approvalA !== ApprovalState.APPROVED || approvalB !== ApprovalState.APPROVED}
                    variant={
                      !isValid && !!parsedAmounts[Field.CURRENCY_A] && !!parsedAmounts[Field.CURRENCY_B]
                        ? 'danger'
                        : 'primary'
                    }
                    width="100%"
                  >
                    {error ?? 'Supply'}
                  </SwapButton>
                </AutoColumn>
              )}
            </AutoColumn>
          </CardBody>
        </Wrapper>
      </AppBody>
      {pair && !noLiquidity && pairState !== PairState.INVALID ? (
        <AutoColumn style={{ minWidth: '20rem', marginTop: '1rem', maxWidth: '440px'}}>
          <MinimalPositionCard showUnwrapped={oneCurrencyIsWKCS} pair={pair} />
        </AutoColumn>
      ) : null}
    </Container>
  )
}
