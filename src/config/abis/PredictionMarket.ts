const PREDICTION_MARKET_ABI = [
    {
      type: "constructor",
      inputs: [
        { name: "_priceToken", type: "address" },
        { name: "_yesToken", type: "address" },
        { name: "_noToken", type: "address" },
        { name: "_marketId", type: "uint256" },
        { name: "_question", type: "string" },
        { name: "_endtime", type: "uint256" },
        { name: "_creator", type: "address" },
      ],
    },
    { type: "error", name: "OwnableInvalidOwner", inputs: [{ name: "owner", type: "address" }] },
    { type: "error", name: "OwnableUnauthorizedAccount", inputs: [{ name: "account", type: "address" }] },
    { type: "event", name: "LiquidityAdded", inputs: [{ name: "provider", type: "address" }, { name: "marketId", type: "uint256" }, { name: "amount", type: "uint256" }] },
    { type: "event", name: "MarketResolved", inputs: [{ name: "marketId", type: "uint256" }, { name: "result", type: "bool" }, { name: "totalPriceToken", type: "uint256" }] },
    {
      type: "function",
      name: "addLiquidity",
      inputs: [{ name: "amount", type: "uint256" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "buy",
      inputs: [
        { name: "isYesToken", type: "bool" },
        { name: "amount", type: "uint256" },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getBalances",
      inputs: [{ name: "account", type: "address" }],
      outputs: [
        { name: "priceTokenBalance", type: "uint256" },
        { name: "yesTokenBalance", type: "uint256" },
        { name: "noTokenBalance", type: "uint256" },
      ],
      stateMutability: "view",
    },
    { type: "function", name: "getMarketState", inputs: [], outputs: [{ name: "marketState", type: "tuple" }] },
    { type: "function", name: "getTokenPrice", inputs: [{ name: "isYesToken", type: "bool" }], outputs: [{ name: "price", type: "uint256" }], stateMutability: "view" },
    {
      type: "function",
      name: "resolve",
      inputs: [
        { name: "isYesWon", type: "bool" },
        { name: "proof", type: "bytes" },
      ],
      stateMutability: "nonpayable",
    },
  ];
  
  export default PREDICTION_MARKET_ABI;
  