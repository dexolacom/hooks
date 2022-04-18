## About
Metamask extension functions:
- networkSwitcher
- addTokenToMetamask

Common functions:
- removeEFromNumber
- addNewTokenInfo

Components:
- NumericInput

Hooks:
- useWeb3Contract

## Installation
`npm i tech-mask-utils` or `yarn add tech-mask-utils`

## Usage
### Metamask functions:

`addTokenToMetamask(web3: any, tokenAddress: string, tokenSymbol?: string, tokenDecimals?: number)`
tokenSymbol and tokenDecimals is optional parameters
```
addTokenToMetamask(web3, '0xae13d989dac2f0debff460ac112a837c89baa7cd', 'BNB', 18)
```

`networkSwitcher(web3, chainId: number)`
```
networkSwitcher(web3, 56)
```
### Common functions:

`removeEFromNumber(number: number)`
```
removeEFromNumber(0.2323e+18) => '232300000000000000'
```
`addNewTokenInfo(tokenAddress: string, tokenName: string, abi: any, chainId: number)`

```
addNweTokenInfo('0x0453hj80...', 'USDT', usdtAbi, 1)
```

### Components:

`<NumericInput value={value} onUserInput={setValue}/>`

If `onMax` is passed to props, the component will render the max button

#####Prop types

```
value: string | number
onUserInput: (input: string) => void
placeholder?: string
onMax?: () => void
inputPadding?: string
inputWidth?: string
inputBackground?: string
inputBorderRadius?: string
```

### Hooks:

`useWeb3Contract(tokensInfoObject)`

Returns chainId, web3 object with current provider and getContract() function

The argument object should be as in the example:

```
export const tokensInfoObject = {
  1: {
    USDT: {
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'USDT',
      abi: usdtAbi
    }
  },
  56: {
    BUSD: {
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      name: 'BUSD',
      abi: busdAbi
    }
  }
}
```
Hook call
```
const {chainId, web3, getContract} = useWeb3Contract(tokensInfoObject)
```

`getContract(contractName: string)`
takes as its argument the name of the contract in uppercase to be returned

```
getContract('USDT') or getContract('BUSD')
```
