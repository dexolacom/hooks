"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensInfo = exports.ChainId = void 0;
const usdtABI_json_1 = __importDefault(require("./abis/usdtABI.json"));
const busdAbi_json_1 = __importDefault(require("./abis/busdAbi.json"));
const fusdtAbi_json_1 = __importDefault(require("./abis/fusdtAbi.json"));
var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAIN_ETH"] = 1] = "MAIN_ETH";
    ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
    ChainId[ChainId["MAIN_BSC"] = 56] = "MAIN_BSC";
    ChainId[ChainId["TEST_BSC"] = 97] = "TEST_BSC";
    ChainId[ChainId["MAIN_FTM"] = 250] = "MAIN_FTM";
    ChainId[ChainId["TEST_FTM"] = 4002] = "TEST_FTM";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
exports.tokensInfo = {
    [ChainId.MAIN_ETH]: {
        USDT: {
            address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            name: 'USDT',
            abi: usdtABI_json_1.default
        }
    },
    [ChainId.MAIN_BSC]: {
        BUSD: {
            address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            name: 'BUSD',
            abi: busdAbi_json_1.default
        }
    },
    [ChainId.MAIN_FTM]: {
        FUSDT: {
            address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
            name: 'FUSDT',
            abi: fusdtAbi_json_1.default
        }
    }
};
//# sourceMappingURL=contracts.js.map