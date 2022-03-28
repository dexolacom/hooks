"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumericInput = void 0;
// @ts-ignore
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const NumericInput = ({ value, onUserInput, placeholder, onMax, 
// style props
inputBackground, inputBorderRadius, inputFontSize, inputFontColor, inputFontWeight, placeholderColor, inputWidth, inputPadding, inputTextAlign, buttonBackground, buttonTextColor, buttonFontSize, buttonFontWeight, buttonPadding, buttonBorder }) => {
    const inputValidator = (nextUserInput) => {
        if (nextUserInput.match(/^(?!00)(?!\.)[0-9]*\.?[0-9]*$/)) {
            return onUserInput(nextUserInput);
        }
    };
    return (react_1.default.createElement(styles_1.InputWrapper, { inputBackground: inputBackground !== null && inputBackground !== void 0 ? inputBackground : inputBackground, inputBorderRadius: inputBorderRadius !== null && inputBorderRadius !== void 0 ? inputBorderRadius : inputBorderRadius, inputPadding: inputPadding !== null && inputPadding !== void 0 ? inputPadding : inputPadding, inputWidth: inputWidth !== null && inputWidth !== void 0 ? inputWidth : inputWidth },
        react_1.default.createElement(styles_1.StyledInput
        // main props
        , { 
            // main props
            value: value, onChange: (e) => inputValidator(e.target.value), inputMode: "decimal", title: "Token Amount", autoComplete: "off", autoCorrect: "off", type: "text", placeholder: placeholder || '0.0', minLength: 1, maxLength: 16, spellCheck: "false", 
            // styling props
            inputFontSize: inputFontColor !== null && inputFontColor !== void 0 ? inputFontColor : inputFontColor, inputFontColor: inputFontSize !== null && inputFontSize !== void 0 ? inputFontSize : inputFontSize, inputFontWeight: inputFontWeight !== null && inputFontWeight !== void 0 ? inputFontWeight : inputFontWeight, placeholderColor: placeholderColor !== null && placeholderColor !== void 0 ? placeholderColor : placeholderColor, inputTextAlign: inputTextAlign !== null && inputTextAlign !== void 0 ? inputTextAlign : inputTextAlign }),
        onMax && (react_1.default.createElement(styles_1.MaxButton, { onClick: onMax, buttonBackground: buttonBackground !== null && buttonBackground !== void 0 ? buttonBackground : buttonBackground, buttonPadding: buttonPadding !== null && buttonPadding !== void 0 ? buttonPadding : buttonPadding, buttonFontSize: buttonFontSize !== null && buttonFontSize !== void 0 ? buttonFontSize : buttonFontSize, buttonTextColor: buttonTextColor !== null && buttonTextColor !== void 0 ? buttonTextColor : buttonTextColor, buttonFontWeight: buttonFontWeight !== null && buttonFontWeight !== void 0 ? buttonFontWeight : buttonFontWeight, buttonBorder: buttonBorder !== null && buttonBorder !== void 0 ? buttonBorder : buttonBorder }, "Max"))));
};
exports.NumericInput = NumericInput;
//# sourceMappingURL=NumericInput.js.map