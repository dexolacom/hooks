// @ts-ignore
import {useEffect, useState} from 'react'
// @ts-ignore
import Web3 from 'web3'
import {getAlternativeProvider} from '../constants/alternativeProvider'
import {getChainId, getContractValue} from '../helpers/helpers';

export const useWeb3Contract = (tokensInfo: any) => {
  const [web3, setWeb3] = useState<any>()
  const [chainId, setChainId] = useState<number>()

  useEffect(() => {
    getChainId().then(chainId => setChainId(chainId))
  }, []);

  useEffect(() => {
    if (chainId) {
      const provider = Web3.givenProvider || getAlternativeProvider(chainId)
      const newWeb3 = new Web3(provider)
      setWeb3(newWeb3)
    }
  }, [chainId])

  const getContract = (contractName: string) => {
    if (!web3) return null
    const contractValue = getContractValue(contractName, tokensInfo, chainId)
    // @ts-ignore
    const abiValue = tokensInfo[chainId][contractName]?.abi
    if (!contractValue) return null
    return new web3.eth.Contract(abiValue, contractValue)
  }
  return {chainId, web3, getContract}
}