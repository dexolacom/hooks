"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWeb3Contract = void 0;
// @ts-ignore
const react_1 = require("react");
// @ts-ignore
const web3_1 = __importDefault(require("web3"));
const helpers_1 = require("../helpers/helpers");
const alternativeProvider_1 = require("../constants/alternativeProvider");
const abis_1 = require("../constants/abis/abis");
// eslint-disable-next-line react/prop-types
const useWeb3Contract = () => {
    const [web3, setWeb3] = (0, react_1.useState)();
    const [chainId, setChainId] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        (0, helpers_1.getChainId)().then(chainId => setChainId(chainId));
    }, []);
    (0, react_1.useEffect)(() => {
        if (chainId) {
            const provider = web3_1.default.givenProvider || (0, alternativeProvider_1.getAlternativeProvider)(chainId);
            const newWeb3 = new web3_1.default(provider);
            setWeb3(newWeb3);
        }
    }, [chainId]);
    const getContract = (contract) => {
        if (!web3)
            return null;
        const contractValue = (0, helpers_1.getContractValue)(contract, chainId);
        const contractAbis = {
            usdt: abis_1.abiETH.usdt,
            busd: abis_1.abiBSC.busd,
            fusdt: abis_1.abiFTM.fusdt
        };
        const abiValue = contractAbis[contract];
        if (!contractValue)
            return null;
        return new web3.eth.Contract(abiValue, contractValue);
    };
    return { chainId, web3, getContract };
};
exports.useWeb3Contract = useWeb3Contract;
//# sourceMappingURL=useWeb3Contract.js.map