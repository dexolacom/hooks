import Web3 from 'web3'

const REACT_APP_NETWORK_URL="https://mainnet.infura.io/v3/099fc58e0de9451d80b18d7c74caa7c1"
const web3 = new Web3(Web3.givenProvider || REACT_APP_NETWORK_URL)

export const networkSwitcher = async (hexChainId:string) => {
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

export const addTokenToMetamask = async (tokenAddress:string, tokenSymbol: string, tokenDecimals: number) => {
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