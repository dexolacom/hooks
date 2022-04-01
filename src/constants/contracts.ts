import usdtAbi from './abis/usdtABI.json'
import busdAbi from './abis/busdAbi.json'
import fusdtAbi from './abis/fusdtAbi.json'

export enum ChainId {
  MAIN_ETH = 1,
  ROPSTEN = 3,
  MAIN_BSC = 56,
  TEST_BSC = 97,
  MAIN_FTM = 250,
  TEST_FTM = 4002
}


export const tokensInfo = {
  [ChainId.MAIN_ETH]: {
    USDT: {
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'USDT',
      abi: usdtAbi
    }
  },
  [ChainId.MAIN_BSC]: {
    BUSD: {
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      name: 'BUSD',
      abi: busdAbi
    }
  },
  [ChainId.MAIN_FTM]: {
    FUSDT: {
      address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
      name: 'FUSDT',
      abi: fusdtAbi
    }
  }
}

