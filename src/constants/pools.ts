import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      322: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      321: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 107,
    stakingToken: tokens.cake,
    earningToken: tokens.suter,
    contractAddress: {
      322: '',
      321: '0xc1E70edd0141c454b834Deac7ddDeA413424aEf9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '15.33321',
  },
]

export default pools
