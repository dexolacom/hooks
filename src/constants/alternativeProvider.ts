// @ts-ignore
import Web3 from 'web3'

enum ChainId {
  MAIN_ETH = 1,
  ROPSTEN = 3,
  MAIN_BSC = 56,
  TEST_BSC = 97,
  MAIN_FTM = 250,
  TEST_FTM = 4002
}

export const networks = {
  MAIN_ETH: 'https://mainnet.infura.io/v3/7d9d43def2584f2a9f01f2a4719327bc',
  ROPSTEN: 'https://ropsten.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  MAIN_BSC: 'https://bsc-dataseed.binance.org/',
  TEST_BSC: 'https://data-seed-prebsc-2-s3.binance.org:8545',
  MAIN_FTM: 'https://rpc.ftm.tools/',
  TEST_FTM: 'https://rpc.testnet.fantom.network/'
}

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
