"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlternativeProvider = void 0;
const networks_1 = require("./networks");
// @ts-ignore
const web3_1 = __importDefault(require("web3"));
const types_1 = require("./types");
const getAlternativeProvider = (chainId) => {
    let provider;
    switch (chainId) {
        case types_1.EChainId.TEST_BSC:
            provider = networks_1.networks.bsc_test;
            break;
        case types_1.EChainId.MAIN_BSC:
            provider = networks_1.networks.bsc_main;
            break;
        case types_1.EChainId.MAIN_ETH:
            provider = networks_1.networks.eth_main;
            break;
        case types_1.EChainId.ROPSTEN:
            provider = networks_1.networks.eth_test;
            break;
        case types_1.EChainId.MAIN_FTM:
            provider = networks_1.networks.ftm_main;
            break;
        default:
            provider = web3_1.default.givenProvider;
            break;
    }
    return provider;
};
exports.getAlternativeProvider = getAlternativeProvider;
//# sourceMappingURL=alternativeProvider.js.map