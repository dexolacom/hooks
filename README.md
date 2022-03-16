## About
Metamask extension functions:
- networkSwitcher
- addTokenToMetamask

General functions:
- numericInputValidator
- removeEFromNumber

## Installation
`npm i tech-mask-utils` or `yarn add tech-mask-utils`

## Usage
###Metamask functions:

`addTokenToMetamask` tokenSymbol and tokenDecimals is optional parameters
```
addTokenToMetamask(web3, '0xae13d989dac2f0debff460ac112a837c89baa7cd', 'BNB', 18)
```

`networkSwitcher`
```
networkSwitcher(web3, '56')
```
###General functions:

`numericInputValidator`
```
const Component = () => {
  return <input type='text' id={'inputId'} onChange={(e) => numericInputValidator(e, 'inputId')}/>
};
```

`removeEFromNumber`
```
removeEFromNumber(0.2323e+18) => '232300000000000000'
```
