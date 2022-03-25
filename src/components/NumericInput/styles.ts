// @ts-nocheck
import styled from 'styled-components';

export const InputWrapper = styled.div<{
  inputBackground?: string
  inputBorderRadius?: string
  inputWidth?: string
  inputPadding?: string
}>`
  display: flex;
  align-items: center;
  background-color: ${({ inputBackground }) => inputBackground ?? '#d2d2d2'};
  border-radius: ${({ inputBorderRadius }) => inputBorderRadius ?? '0'};
  width: ${({ inputWidth }) => inputWidth ?? '200px'};
  padding: ${({ inputPadding }) => inputPadding ?? '5px'};
`

export const StyledInput = styled.input<{
  inputFontSize?: string
  inputFontColor?: string
  inputFontWeight?: string
  placeholderColor?: string
  inputTextAlign?: string
}>`
  background: transparent;
  //padding-left: 10px;
  color: ${({ inputFontColor }) => (inputFontColor ?? '#fff')};
  font-weight: ${({ inputFontWeight }) => inputFontWeight ?? '500'};
  font-size: ${({ inputFontSize }) => inputFontSize ?? '18px'};
  text-align: ${({ inputTextAlign }) => inputTextAlign ?? 'left'};
  //position: relative;
  outline: none;
  border: none;
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? '#d2d2d2'};
  }
`

export const MaxButton = styled.button<{
  buttonBackground?: string
  buttonTextColor?: string
  buttonFontSize?: string
  buttonFontWeight?: string
  buttonPadding?: string
  buttonBorder?: string
}>`
  color: ${({ buttonTextColor }) => (buttonTextColor ?? '#fff')};
  background: ${({ buttonBackground }) => buttonBackground ?? 'transparent'};
  padding: ${({ buttonPadding }) => buttonPadding ?? '0'};
  font-size: ${({ buttonFontSize }) => buttonFontSize ?? '18px'};
  font-weight: ${({ buttonFontWeight }) => buttonFontWeight ?? '500'};
  cursor: pointer;
  text-align: center;
  border: ${({buttonBorder}) => buttonBorder ?? 'none'};
  
`