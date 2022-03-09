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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTokenToMetamask = exports.networkSwitcher = void 0;
const networkSwitcher = (hexChainId, web3) => __awaiter(void 0, void 0, void 0, function* () {
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