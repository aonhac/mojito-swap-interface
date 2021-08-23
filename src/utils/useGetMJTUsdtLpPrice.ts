import tokens from 'constants/tokens'
import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetMJTUsdtLpPrice = () => {
  const mjtAddress = tokens.mjt.address[process.env.REACT_APP_CHAIN_ID as string]
  const usdtAddress = tokens.usdt.address[process.env.REACT_APP_CHAIN_ID as string]
  const inputCurrency = useCurrency(mjtAddress)
  const outputCurrency = useCurrency(usdtAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetMJTUsdtLpPrice
