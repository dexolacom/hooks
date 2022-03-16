"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTokenToMetamask = exports.networkSwitcher = exports.numericInputValidator = void 0;
const logicAbi_json_1 = __importDefault(require("./logicAbi.json"));
const stringTrim = (string, maxLength) => {
    if (!string)
        return string;
    if (maxLength < 1)
        return string;
    if (string.length <= maxLength)
        return string;
    if (maxLength === 1)
        return string.substring(0, 1) + '...';
    const midpoint = Math.ceil(string.length / 2);
    const toRemove = string.length - maxLength;
    const leftStrip = Math.ceil(toRemove / 2);
    const rightStrip = toRemove - leftStrip;
    return `${string.substring(0, midpoint - leftStrip)}...${string.substring(midpoint + rightStrip)}`;
};
const numericInputValidator = (e, inputId) => {
    const userInput = e.target.value;
    // @ts-ignore
    const input = document.getElementById(inputId);
    if (userInput.charAt(1) === '0') {
        input.value = '0';
    }
    if (userInput.charAt(0) === '.') {
        input.value = '';
    }
    input.value = input.value.replace(/[^0-9\.]/g, '');
    input.addEventListener("blur", () => {
        input.value = stringTrim(userInput, 10);
    });
    input.addEventListener("focus", () => {
        input.value = userInput;
    });
};
exports.numericInputValidator = numericInputValidator;
const networkSwitcher = (web3, chainId) => __awaiter(void 0, void 0, void 0, function* () {
    const hexChainId = `0x${chainId.toString(16)}`;
    try {
        // @ts-ignore
        yield web3.currentProvider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: hexChainId }]
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.networkSwitcher = networkSwitcher;
const addTokenToMetamask = (web3, tokenAddress, tokenSymbol, tokenDecimals) => __awaiter(void 0, void 0, void 0, function* () {
    const contract = new web3.eth.Contract(logicAbi_json_1.default, tokenAddress);
    if (!tokenSymbol) {
        tokenSymbol = yield contract.methods.symbol().call();
    }
    if (!tokenDecimals) {
        tokenDecimals = yield contract.methods.decimals().call();
    }
    try {
        // @ts-ignore
        yield web3.currentProvider.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    // image: tokenImage,
                },
            },
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.addTokenToMetamask = addTokenToMetamask;
//# sourceMappingURL=index.js.map