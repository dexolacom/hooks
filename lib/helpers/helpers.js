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
exports.stringTrim = exports.addNewTokenInfo = exports.getContractValue = exports.getChainId = exports.createNewWallet = exports.setStyles = void 0;
// @ts-ignore
const web3_1 = __importDefault(require("web3"));
const alternativeProvider_1 = require("../constants/alternativeProvider");
const setStyles = (styles) => {
    const range = document.createRange();
    const arr = [];
    // @ts-ignore
    Object.entries(styles).forEach(([key]) => {
        const obj = JSON.stringify(styles[key], null, "\t")
            .replace(/"/g, "")
            .replace(/,\n/g, ";")
            .replace(/\}/g, ";}");
        arr.push(`.${key}${obj}`);
    });
    const res = `<style>${[...arr].join("")}</style>`;
    const frag = range.createContextualFragment(res);
    // @ts-ignore
    document.querySelector("head").append(frag);
};
exports.setStyles = setStyles;
const createNewWallet = (chainId) => {
    try {
        const web3 = new web3_1.default(web3_1.default.givenProvider || (0, alternativeProvider_1.getAlternativeProvider)(chainId));
        const account = web3.eth.accounts.create();
        if (!account)
            return console.error("Error creating wallet!");
        return {
            publicAddress: account.address,
            privateKey: account.privateKey,
        };
    }
    catch (error) {
        console.log("error:", error);
        return null;
    }
};
exports.createNewWallet = createNewWallet;
const getChainId = () => __awaiter(void 0, void 0, void 0, function* () {
    const web3 = new web3_1.default(web3_1.default.givenProvider);
    return yield web3.eth.net.getId();
});
exports.getChainId = getChainId;
const getContractValue = (contractName, tokensInfo, chainId) => {
    var _a, _b;
    // @ts-ignore
    return (_b = (_a = tokensInfo[chainId][contractName]) === null || _a === void 0 ? void 0 : _a.address) !== null && _b !== void 0 ? _b : console.error('Address for this token is not exist. Make sure you are using the correct network');
};
exports.getContractValue = getContractValue;
const addNewTokenInfo = (tokenAddress, tokenName, abi, chainId) => {
    // @ts-ignore
    const obj = tokensInfo[chainId];
    const newObj = { [`${tokenName}`]: { tokenAddress, tokenName, abi } };
    Object.assign(obj, newObj);
};
exports.addNewTokenInfo = addNewTokenInfo;
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
exports.stringTrim = stringTrim;
//# sourceMappingURL=helpers.js.map