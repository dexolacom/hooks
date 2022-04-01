// @ts-ignore
import Web3 from 'web3'
import {EChainId, TContractObject} from '../constants/types';
import {contractsBSC, contractsETH, contractsFTM} from '../constants/contracts';

export const getChainId = async () => {
  const web3 = new Web3(Web3.givenProvider)
  return await web3.eth.net.getId()
};

export const getContractValue = (contract: string, chainId?: number) => {
  const contractValues = {
    [EChainId.MAIN_ETH]: contractsETH[contract as keyof TContractObject],
    [EChainId.MAIN_BSC]: contractsBSC[contract as keyof TContractObject],
    [EChainId.MAIN_FTM]: contractsFTM[contract as keyof TContractObject],
  }
  // @ts-ignore
  return contractValues[chainId as keyof EChainId] ??
    console.error('Address for this token is not exist. Make sure you are using the correct network')
}