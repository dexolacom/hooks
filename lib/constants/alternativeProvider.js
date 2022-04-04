"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlternativeProvider = void 0;
const networks_1 = require("./networks");
// @ts-ignore
const web3_1 = __importDefault(require("web3"));
const contracts_1 = require("./contracts");
const getAlternativeProvider = (chainId) => {
    var _a;
    const providers = {
        [contracts_1.ChainId.MAIN_ETH]: networks_1.networks.MAIN_ETH,
        [contracts_1.ChainId.ROPSTEN]: networks_1.networks.ROPSTEN,
        [contracts_1.ChainId.MAIN_BSC]: networks_1.networks.MAIN_BSC,
        [contracts_1.ChainId.TEST_BSC]: networks_1.networks.TEST_BSC,
        [contracts_1.ChainId.MAIN_FTM]: networks_1.networks.MAIN_FTM,
        [contracts_1.ChainId.TEST_FTM]: networks_1.networks.TEST_FTM,
    };
    // @ts-ignore
    return (_a = providers[chainId]) !== null && _a !== void 0 ? _a : web3_1.default.givenProvider;
};
exports.getAlternativeProvider = getAlternativeProvider;
//# sourceMappingURL=alternativeProvider.js.map