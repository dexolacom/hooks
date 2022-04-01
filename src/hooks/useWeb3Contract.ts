// @ts-ignore
import {useEffect, useState} from 'react'
// @ts-ignore
import Web3 from 'web3'
import {TContractObject} from '../constants/types';
import {getChainId, getContractValue} from '../helpers/helpers';
import {getAlternativeProvider} from '../constants/alternativeProvider';
import {abiBSC, abiETH, abiFTM} from '../constants/abis/abis';

// eslint-disable-next-line react/prop-types
export const useWeb3Contract = () => {
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

  const getContract = (contract: string) => {
    if (!web3) return null
    const contractValue = getContractValue(contract, chainId)
    const contractAbis = {
      usdt: abiETH.usdt,
      busd: abiBSC.busd,
      fusdt: abiFTM.fusdt
    }

    const abiValue = contractAbis[contract as keyof TContractObject]
    if (!contractValue) return null
    return new web3.eth.Contract(abiValue, contractValue)
  }
  return {chainId, web3, getContract}
}