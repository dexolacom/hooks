"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlternativeProvider = exports.networks = void 0;
// @ts-ignore
const web3_1 = __importDefault(require("web3"));
var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAIN_ETH"] = 1] = "MAIN_ETH";
    ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
    ChainId[ChainId["MAIN_BSC"] = 56] = "MAIN_BSC";
    ChainId[ChainId["TEST_BSC"] = 97] = "TEST_BSC";
    ChainId[ChainId["MAIN_FTM"] = 250] = "MAIN_FTM";
    ChainId[ChainId["TEST_FTM"] = 4002] = "TEST_FTM";
})(ChainId || (ChainId = {}));
exports.networks = {
    MAIN_ETH: 'https://mainnet.infura.io/v3/7d9d43def2584f2a9f01f2a4719327bc',
    ROPSTEN: 'https://ropsten.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
    MAIN_BSC: 'https://bsc-dataseed.binance.org/',
    TEST_BSC: 'https://data-seed-prebsc-2-s3.binance.org:8545',
    MAIN_FTM: 'https://rpc.ftm.tools/',
    TEST_FTM: 'https://rpc.testnet.fantom.network/'
};
const getAlternativeProvider = (chainId) => {
    var _a;
    const providers = {
        [ChainId.MAIN_ETH]: exports.networks.MAIN_ETH,
        [ChainId.ROPSTEN]: exports.networks.ROPSTEN,
        [ChainId.MAIN_BSC]: exports.networks.MAIN_BSC,
        [ChainId.TEST_BSC]: exports.networks.TEST_BSC,
        [ChainId.MAIN_FTM]: exports.networks.MAIN_FTM,
        [ChainId.TEST_FTM]: exports.networks.TEST_FTM,
    };
    // @ts-ignore
    return (_a = providers[chainId]) !== null && _a !== void 0 ? _a : web3_1.default.givenProvider;
};
exports.getAlternativeProvider = getAlternativeProvider;
//# sourceMappingURL=alternativeProvider.js.map