"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abiFTM = exports.abiBSC = exports.abiETH = void 0;
const usdtABI_json_1 = __importDefault(require("./usdtABI.json"));
const busdAbi_json_1 = __importDefault(require("./busdAbi.json"));
const fusdtAbi_json_1 = __importDefault(require("./fusdtAbi.json"));
exports.abiETH = {
    usdt: usdtABI_json_1.default
};
exports.abiBSC = {
    busd: busdAbi_json_1.default
};
exports.abiFTM = {
    fusdt: fusdtAbi_json_1.default
};
//# sourceMappingURL=abis.js.map