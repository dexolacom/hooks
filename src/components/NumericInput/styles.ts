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

export const StyledInput = styled.input`
  background: transparent;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  text-align: left;
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

export const MaxButton = styled.button`
  color: #fff;
  background: transparent;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border: none;
  
`