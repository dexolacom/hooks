export declare const setStyles: (styles: {
    [key: string]: string;
}) => void;
export declare const createNewWallet: (chainId: number) => void | {
    publicAddress: any;
    privateKey: any;
} | null;
export declare const getChainId: () => Promise<any>;
export declare const getContractValue: (contractName: string, tokensInfo: any, chainId?: number | undefined) => any;
export declare const addNewTokenInfo: (tokenAddress: string, tokenName: string, abi: any, chainId?: number | undefined) => void;
export declare const stringTrim: (string: string, maxLength: number) => string;
//# sourceMappingURL=helpers.d.ts.map