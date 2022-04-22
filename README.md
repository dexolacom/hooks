## About
Metamask extension functions:
- networkSwitcher
- addTokenToMetamask

Common functions:
- removeEFromNumber
- setStyles
- createNewWallet

Components:
- NumericInput

Hooks:
- useWeb3Contract

## Installation
`npm i tech-mask-utils` or `yarn add tech-mask-utils`

## Usage

To export the newly created function, you must write in index.ts:
`export {yourFunc} from '../../..'`

To import some function or component:
`import {} from 'tech-mask-utils'`

### Metamask functions:

* `addTokenToMetamask(web3: any, tokenAddress: string, tokenSymbol?: string, tokenDecimals?: number)`
tokenSymbol and tokenDecimals is optional parameters
```js
addTokenToMetamask(web3, '0xae13d989dac2f0debff460ac112a837c89baa7cd', 'BNB', 18)
```

* `networkSwitcher(web3, chainId: number)`
```js
networkSwitcher(web3, 56)
```
### Common functions:

* `removeEFromNumber(number: number)`
```js
removeEFromNumber(0.2323e+18) => '232300000000000000'
```

* `createNewWallet()` creates new web3 account and returns publicAddress and privateKey
```js
const {publicAddress, privateKey} = createNewWallet()
```

* `setStyles(styles: object)` uses for set styles to component. In example below this function set styles for input max button

```js
const styles = {
  inputMaxButton: {
    background: '#fff',
    'border-radius': '20px'
  },
  'inputMaxButton:hover': {
    background: '#000'
  }
}

setStyles(styles)
```
### Components:
* `<NumericInput/>`

If `onMax` is passed to props, the component will render the max button

#### Prop types

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

#### Usage

```jsx
import {NumericInput} from 'tech-mask-utils'

const App = () => {
  return (
    <>
     <NumericInput 
       value={value}
       onUserInput={setValue}
       onMax={onMax}
       placeholder={'enter your value'}
       // styling
       inputPadding={'10px'}
       inputWidth={'10px'}
       inputBackground={'10px'}
       inputBorderRadius={'10px'}
     />
    </>
  )
}
```

### Hooks:

* `useWeb3Contract(contractInfoObject)`

Returns chainId, web3 object with current provider and getContract() function

`getContract(contractName: string)`
takes as its argument the name of the contract in uppercase to be returned

The argument object should be as in the example:

```js
export const contractInfoObject = {
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
#### Usage
```jsx
import {useWeb3Contract} from 'tech-mask-utils'

const App = () => {
const {chainId, web3, getContract} = useWeb3Contract(contractInfoObject)
const contract = getContract('USDT')

  return (
    <></>
  )
}
```
