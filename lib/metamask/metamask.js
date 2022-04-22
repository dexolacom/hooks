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
exports.addTokenToMetamask = exports.networkSwitcher = exports.removeEFromNumber = void 0;
const logicAbi_json_1 = __importDefault(require("../logicAbi.json"));
// @ts-ignore
const web3_1 = __importDefault(require("web3"));
const web3 = new web3_1.default(web3_1.default.givenProvider);
const removeEFromNumber = (number) => {
    if (Math.abs(number) < 1) {
        return number.toLocaleString('fullwide', { useGrouping: false, minimumFractionDigits: 18 });
    }
    return number.toLocaleString('fullwide', { useGrouping: false });
};
exports.removeEFromNumber = removeEFromNumber;
const networkSwitcher = (chainId) => __awaiter(void 0, void 0, void 0, function* () {
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
const addTokenToMetamask = (tokenAddress, tokenSymbol, tokenDecimals) => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=metamask.js.map