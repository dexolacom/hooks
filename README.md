## About
Metamask extension functions:
- networkSwitcher
- addTokenToMetamask

Common functions:
- removeEFromNumber

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
inputFontSize?: string
inputFontColor?: string
inputFontWeight?: string
placeholderColor?: string
inputTextAlign?: string
buttonBackground?: string
buttonTextColor?: string
buttonFontSize?: string
buttonFontWeight?: string
buttonPadding?: string
buttonBorder?: string
```

### Hooks:

`useWeb3Contract()`

Returns chainId, web3 object with current provider and getContract() function

```
const {chainId, web3, getContract} = useWeb3Contract()
```

`getContract(contractName: string)`
takes as its argument the name of the contract to be returned

```
getContract('USDT') or getContract('BUSD')
```
