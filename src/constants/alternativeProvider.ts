import { networks } from './networks'
// @ts-ignore
import Web3 from 'web3'
import {ChainId} from './contracts';

export const getAlternativeProvider = (chainId: number) => {
  const providers = {
    [ChainId.MAIN_ETH]: networks.MAIN_ETH,
    [ChainId.ROPSTEN]: networks.ROPSTEN,
    [ChainId.MAIN_BSC]: networks.MAIN_BSC,
    [ChainId.TEST_BSC]: networks.TEST_BSC,
    [ChainId.MAIN_FTM]: networks.MAIN_FTM,
    [ChainId.TEST_FTM]: networks.TEST_FTM,
  }

  // @ts-ignore
  return providers[chainId] ?? Web3.givenProvider
}
