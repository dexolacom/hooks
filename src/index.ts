import abi from './logicAbi.json'

export const networkSwitcher = async (chainId: number, web3: any) => {
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