const PREDICTION_MARKET_ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_priceToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "_yesToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "_noToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_marketId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_question",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_endtime",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_creator",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "x",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "y",
          type: "uint256",
        },
      ],
      name: "PRBMath_MulDiv18_Overflow",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "x",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "y",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "denominator",
          type: "uint256",
        },
      ],
      name: "PRBMath_MulDiv_Overflow",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "UD60x18",
          name: "x",
          type: "uint256",
        },
      ],
      name: "PRBMath_UD60x18_Exp2_InputTooBig",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "UD60x18",
          name: "x",
          type: "uint256",
        },
      ],
      name: "PRBMath_UD60x18_Exp_InputTooBig",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "UD60x18",
          name: "x",
          type: "uint256",
        },
      ],
      name: "PRBMath_UD60x18_Log_InputTooSmall",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "EmergencyLiquidityAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LiquidityAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "result",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalPriceToken",
          type: "uint256",
        },
      ],
      name: "MarketResolved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "rewardAmount",
          type: "uint256",
        },
      ],
      name: "RewardClaimed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "opType",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "tokenType",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "cost",
          type: "uint256",
        },
      ],
      name: "TokenOperation",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "addLiquidity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "isYesToken",
          type: "bool",
        },
        {
          internalType: "UD60x18",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "buy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimReward",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "getBalances",
      outputs: [
        {
          internalType: "uint256",
          name: "priceTokenBalance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "yesTokenBalance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "noTokenBalance",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "isYesToken",
          type: "bool",
        },
        {
          internalType: "UD60x18",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "getCost",
      outputs: [
        {
          internalType: "UD60x18",
          name: "price",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMarketState",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "question",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalStaked",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalYes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalNo",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "resolved",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "won",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "totalPriceToken",
              type: "uint256",
            },
          ],
          internalType: "struct PredictionMarket.Market",
          name: "marketState",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "isYesToken",
          type: "bool",
        },
      ],
      name: "getTokenPrice",
      outputs: [
        {
          internalType: "UD60x18",
          name: "price",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTokenQuantities",
      outputs: [
        {
          internalType: "UD60x18",
          name: "yesQuantity",
          type: "uint256",
        },
        {
          internalType: "UD60x18",
          name: "noQuantity",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "initializeLiquidity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "market",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "question",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "endTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalStaked",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalYes",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalNo",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "resolved",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "won",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "totalPriceToken",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "noToken",
      outputs: [
        {
          internalType: "contract NoToken",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155BatchReceived",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "priceToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "qNo",
      outputs: [
        {
          internalType: "UD60x18",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "qYes",
      outputs: [
        {
          internalType: "UD60x18",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "isYesWon",
          type: "bool",
        },
        {
          internalType: "bytes",
          name: "proof",
          type: "bytes",
        },
      ],
      name: "resolve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "resolver",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "isYesToken",
          type: "bool",
        },
        {
          internalType: "UD60x18",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "sell",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newResolver",
          type: "address",
        },
      ],
      name: "setResolver",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "yesToken",
      outputs: [
        {
          internalType: "contract YesToken",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ] as const;
  
  export default PREDICTION_MARKET_ABI;