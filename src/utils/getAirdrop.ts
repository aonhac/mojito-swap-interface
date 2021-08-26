import { getAirdropContract } from './contractHelpers'
import BN from 'bignumber.js'

export const getAirdrop = async (account: string, library: any) => {
  const contract = getAirdropContract(library)
  const deadline = await contract.methods.deadline().call()
  const now = new Date().getTime()
  const isOutdated = new BN(now).gte(new BN(`${deadline}000`))
  console.log('isOutDate', isOutdated)
}
