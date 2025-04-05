import { avalancheFuji, type Chain } from "viem/chains";

export type ChainConfig = {
  fanfateCore: `0x${string}`;
  mockERC20: `0x${string}`;
  noToken: `0x${string}`;
  yesToken: `0x${string}`;
  subgraphUrl: string;
};

const chainConfig = {
  [avalancheFuji.id]: {
    chain: avalancheFuji,
    contracts: {
      fanfateCore: "0xb0352D0c03852F4abac565d420046a4BB105b2D2",
      mockERC20: "0x182A62a168Ff361C21B6A7a180bF847ca0BB34ce",
      noToken: "0xb9fC506955C7b55c40Bed8554a6def33C305078E",
      yesToken: "0x2bFB96Ad6F7Da10ba90bb2aEC4550f0EC548C709",
      subgraphUrl: "https://api.studio.thegraph.com/query/73364/fanfate-fuji/version/latest",
    },
  },
};

// Get supported chains
export const supportedChains = Object.values(chainConfig).map(c => c.chain) as [Chain, ...Chain[]];

// Get contract config for a chain
export const getContractsConfig = (id: number) => chainConfig[id]?.contracts;
