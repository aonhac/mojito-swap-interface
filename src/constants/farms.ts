import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'KCS/MJT LP',
    lpAddresses: {
      322: '0xf8bc98Cbb64486a6E77fA91e3D50cA814aa121B6',
      321: '0xA527a61703D82139F8a06Bc300322cC9CAA2df5A',
    },
    token: tokens.mjt,
    quoteToken: tokens.wkcs,
  },
]

export default farms
