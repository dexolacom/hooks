export const networkSwitcher = async (hexChainId: string, web3: any) => {
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

export const addTokenToMetamask = async (web3: any, tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
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