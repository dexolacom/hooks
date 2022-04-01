export interface NumericInputProps {
  value: string | number
  onUserInput: (input: string) => void
  placeholder?: string
  withMax?: boolean
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
}

export interface TContractObject {
  usdt?: string
  busd?: string
  fusdt?: string
}

export type TAbi = {
  usdt?: any
  busd?: any
  fusdt?: any
}

export enum EChainId {
  MAIN_ETH = 1,
  ROPSTEN = 3,
  MAIN_BSC = 56,
  TEST_BSC = 97,
  MAIN_FTM = 250,
  TEST_FTM = 4002
}