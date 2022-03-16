// @ts-ignore
import React from 'react'
import abi from './logicAbi.json'

const stringTrim = (string:string, maxLength:number) => {
  if (!string) return string;
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return string.substring(0,1) + '...';

  const midpoint = Math.ceil(string.length / 2);
  const toRemove = string.length - maxLength;
  const leftStrip = Math.ceil(toRemove/2);
  const rightStrip = toRemove - leftStrip;
  return `${string.substring(0, midpoint - leftStrip)}...${string.substring(midpoint + rightStrip)}`
}

export const numericInputValidator = (e: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
  const userInput = e.target.value
  // @ts-ignore
  const input: HTMLInputElement = document.getElementById(inputId)

  if (userInput.charAt(1) === '0') {
    input.value = '0'
  }
  if (userInput.charAt(0) === '.') {
    input.value = ''
  }
  input.value = input.value.replace(/[^0-9\.]/g,'');
  input.addEventListener("blur", () => {
    input.value = stringTrim(userInput, 10);
  });
  input.addEventListener("focus", () => {
    input.value = userInput
  })
};


export const networkSwitcher = async (web3: any, chainId: number) => {
  const hexChainId = `0x${chainId.toString(16)}`
  try {
    // @ts-ignore
    await web3.currentProvider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hexChainId }]
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addTokenToMetamask = async (web3: any, tokenAddress: string, tokenSymbol?: string, tokenDecimals?: number) => {
  const contract = new web3.eth.Contract(abi as any, tokenAddress)
  if (!tokenSymbol) {
    tokenSymbol = await contract.methods.symbol().call()
  }
  if (!tokenDecimals) {
    tokenDecimals = await contract.methods.decimals().call()
  }

  try {
    // @ts-ignore
    await web3.currentProvider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          // image: tokenImage,
        },
      },
    })
  } catch (error: any) {
    console.log(error.message)
  }
}