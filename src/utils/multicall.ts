import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { getWeb3NoAccount } from 'utils/web3'
import MultiCallAbi from 'constants/abis/Multicall.json'
import { getMulticallAddress } from 'utils/addressHelpers'
// import { MULTICALL_ADDRESS } from 'constants/multicall'

interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (example: balanceOf)
  params?: any[] // Function params
}

const multicall = async (abi: any[], calls: Call[]) => {
  const web3 = getWeb3NoAccount()
  const multi = new web3.eth.Contract(MultiCallAbi as unknown as AbiItem, getMulticallAddress())
  // const multi = new web3.eth.Contract(MultiCallAbi as unknown as AbiItem, MULTICALL_ADDRESS[322])
  const itf = new Interface(abi)

  const calldata = calls.map((call) => {
    console.log(call.name, call.params)
    return [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)]
  })

  // debugger
  const { returnData } = await multi.methods.aggregate(calldata).call()
  console.log('returnData', returnData)
  const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  return res
}

export default multicall
