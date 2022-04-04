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