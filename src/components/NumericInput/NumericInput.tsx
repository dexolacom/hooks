// @ts-ignore
import React from 'react';
import {InputWrapper, StyledInput, MaxButton} from './styles';
import {NumericInputProps, InputButtonProps} from '../../constants/types';

export const NumericInput = ({
    value,
    onUserInput,
    placeholder,
    onMax,
    // style props
    inputBackground,
    inputBorderRadius,
    inputWidth,
    inputPadding,
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
      />
      {onMax && (
        <InputButton onMax={onMax}/>
      )}
    </InputWrapper>
  );
};


export const InputButton = ({onMax}: InputButtonProps) => {
  return (
    <MaxButton onClick={onMax}>Max</MaxButton>
  )
};