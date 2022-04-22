"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxButton = exports.StyledInput = exports.InputWrapper = void 0;
// @ts-nocheck
const styled_components_1 = __importDefault(require("styled-components"));
exports.InputWrapper = styled_components_1.default.div `
  display: flex;
  align-items: center;
  background-color: ${({ inputBackground }) => inputBackground !== null && inputBackground !== void 0 ? inputBackground : '#d2d2d2'};
  border-radius: ${({ inputBorderRadius }) => inputBorderRadius !== null && inputBorderRadius !== void 0 ? inputBorderRadius : '0'};
  width: ${({ inputWidth }) => inputWidth !== null && inputWidth !== void 0 ? inputWidth : '200px'};
  padding: ${({ inputPadding }) => inputPadding !== null && inputPadding !== void 0 ? inputPadding : '5px'};
`;
exports.StyledInput = styled_components_1.default.input `
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
    color: ${({ placeholderColor }) => placeholderColor !== null && placeholderColor !== void 0 ? placeholderColor : '#d2d2d2'};
  }
`;
exports.MaxButton = styled_components_1.default.button `
  color: #fff;
  background: transparent;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border: none;
  
`;
//# sourceMappingURL=styles.js.map