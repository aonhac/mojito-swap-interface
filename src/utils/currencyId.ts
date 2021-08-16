import { Currency, ETHER, Token } from 'mojito-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'KCS'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
