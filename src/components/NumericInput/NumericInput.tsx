// @ts-ignore
import React from 'react';
import {InputWrapper, StyledInput, MaxButton} from './styles';
import {NumericInputProps} from '../../constants/types';

export const NumericInput = ({
    value,
    onUserInput,
    placeholder,
    onMax,
    // style props
    inputBackground,
    inputBorderRadius,
    inputFontSize,
    inputFontColor,
    inputFontWeight,
    placeholderColor,
    inputWidth,
    inputPadding,
    inputTextAlign,
    buttonBackground,
    buttonTextColor,
    buttonFontSize,
    buttonFontWeight,
    buttonPadding,
    buttonBorder
  }: NumericInputProps & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {

  const inputValidator = (nextUserInput: string) => {
    if (nextUserInput.match(/^(?!00)(?!\.)[0-9]*\.?[0-9]*$/)) {
      return onUserInput(nextUserInput)
    }
  };

  return (
    <InputWrapper
      inputBackground={inputBackground ?? inputBackground}
      inputBorderRadius={inputBorderRadius ?? inputBorderRadius}
      inputPadding={inputPadding ?? inputPadding}
      inputWidth={inputWidth ?? inputWidth}
    >
      <StyledInput
        // main props
        value={value}
        onChange={(e: { target: { value: string; }; }) => inputValidator(e.target.value)}
        inputMode="decimal"
        title="Token Amount"
        autoComplete="off"
        autoCorrect="off"
        type="text"
        placeholder={placeholder || '0.0'}
        minLength={1}
        maxLength={16}
        spellCheck="false"
        // styling props
        inputFontSize={inputFontColor ?? inputFontColor}
        inputFontColor={inputFontSize ?? inputFontSize}
        inputFontWeight={inputFontWeight ?? inputFontWeight}
        placeholderColor={placeholderColor ?? placeholderColor}
        inputTextAlign={inputTextAlign ?? inputTextAlign}
      />
      {onMax && (
        <MaxButton
          onClick={onMax}
          buttonBackground={buttonBackground ?? buttonBackground}
          buttonPadding={buttonPadding ?? buttonPadding}
          buttonFontSize={buttonFontSize ?? buttonFontSize}
          buttonTextColor={buttonTextColor ?? buttonTextColor}
          buttonFontWeight={buttonFontWeight ?? buttonFontWeight}
          buttonBorder={buttonBorder ?? buttonBorder}
        >
          Max
        </MaxButton>
      )}
    </InputWrapper>
  );
};