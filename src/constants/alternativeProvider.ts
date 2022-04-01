import { networks } from './networks'
// @ts-ignore
import Web3 from 'web3'
import { EChainId } from './types'

export const getAlternativeProvider = (chainId: number) => {
  let provider

  switch (chainId) {
    case EChainId.TEST_BSC:
      provider = networks.bsc_test
      break
    case EChainId.MAIN_BSC:
      provider = networks.bsc_main
      break
    case EChainId.MAIN_ETH:
      provider = networks.eth_main
      break
    case EChainId.ROPSTEN:
      provider = networks.eth_test
      break
    case EChainId.MAIN_FTM:
      provider = networks.ftm_main
      break
    default:
      provider = Web3.givenProvider
      break
  }
  return provider
}
