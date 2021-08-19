import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MojitoSwap',
  description: 'The #1 AMM and yield farm on KCC',
  image: 'https://app.mojitoswap.finance/static/media/logo-icon.6813329c.svg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'MojitoSwap Easter Battle',
    description: 'Register now for the MojitoSwap Easter battle!',
    image: 'https://app.mojitoswap.finance/static/media/logo-icon.6813329c.svg',
  },
}
