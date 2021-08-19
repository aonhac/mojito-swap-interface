import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
import { poolsConfig } from 'constants/index'
import { PoolCategory } from 'constants/types'

// Addresses
import {
  getAddress,
  getPancakeProfileAddress,
  getPancakeRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
  getCakeAddress,
  getLotteryAddress,
  getLotteryTicketAddress,
  getMasterChefAddress,
  getPointCenterIfoAddress,
  getClaimRefundAddress,
  getTradingCompetitionAddress,
  getEasterNftAddress,
} from 'utils/addressHelpers'

// ABI
import sousChefBnb from 'constants/abis/sousChefBnb.json'
import bep20Abi from 'constants/abis/erc20.json'
import lpTokenAbi from 'constants/abis/lpToken.json'
import cakeAbi from 'constants/abis/mjt.json'
// import lotteryAbi from 'config/abi/lottery.json'
// import lotteryTicketAbi from 'config/abi/lotteryNft.json'
import masterChef from 'constants/abis/masterchef.json'
import sousChef from 'constants/abis/sousChef.json'
// import sousChefBnb from 'config/abi/sousChefBnb.json'

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract(abi as unknown as AbiItem, address)
}

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}

export const getLpContract = (address: string, web3?: Web3) => {
  return getContract(lpTokenAbi, address, web3)
}

export const getCakeContract = (web3?: Web3) => {
  return getContract(cakeAbi, getCakeAddress(), web3)
}

export const getMasterchefContract = (web3?: Web3) => {
  return getContract(masterChef, getMasterChefAddress(), web3)
}

export const getSouschefContract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id) as any
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), web3)
}
