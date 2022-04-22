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
inputBackground, inputBorderRadius, inputWidth, inputPadding, }) => {
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
            value: value, onChange: (e) => inputValidator(e.target.value), inputMode: "decimal", title: "Token Amount", autoComplete: "off", autoCorrect: "off", type: "text", placeholder: placeholder || '0.0', minLength: 1, maxLength: 16, spellCheck: "false" }),
        onMax && (react_1.default.createElement(styles_1.MaxButton, { className: 'inputMaxButton', onClick: onMax }, "Max"))));
};
exports.NumericInput = NumericInput;
//# sourceMappingURL=NumericInput.js.map