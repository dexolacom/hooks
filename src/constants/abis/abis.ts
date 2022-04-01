import { TAbi } from '../types';
import usdtAbi from './usdtABI.json'
import busdAbi from './busdAbi.json'
import fusdtAbi from './fusdtAbi.json'


export const abiETH: TAbi = {
  usdt: usdtAbi
}

export const abiBSC: TAbi = {
  busd: busdAbi
}

export const abiFTM: TAbi = {
  fusdt: fusdtAbi
}