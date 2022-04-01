// @ts-ignore
import Web3 from 'web3'
import { tokensInfo } from '../constants/contracts';

export const getChainId = async () => {
  const web3 = new Web3(Web3.givenProvider)
  return await web3.eth.net.getId()
};

export const getContractValue = (contractName: string, chainId?: number) => {
  // @ts-ignore
  return tokensInfo[chainId][contractName]?.address ??
    console.error('Address for this token is not exist. Make sure you are using the correct network')
}

export const addNewTokenInfo = (address: string, name: string, abi: any, chainId?: number) => {
  // @ts-ignore
  const obj = tokensInfo[chainId]
  const newObj = {[`${name}`]: {address, name, abi}}
  Object.assign(obj, newObj)
};