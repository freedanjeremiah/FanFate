const TOKENSABI = [
    { type: "constructor", inputs: [{ name: "initialOwner", type: "address" }] },
    { type: "error", name: "ERC1155InsufficientBalance", inputs: ["sender", "balance", "needed", "tokenId"] },
    { type: "error", name: "ERC1155InvalidApprover", inputs: ["approver"] },
    { type: "error", name: "ERC1155InvalidArrayLength", inputs: ["idsLength", "valuesLength"] },
    { type: "error", name: "ERC1155InvalidOperator", inputs: ["operator"] },
    { type: "error", name: "ERC1155InvalidReceiver", inputs: ["receiver"] },
    { type: "error", name: "ERC1155InvalidSender", inputs: ["sender"] },
    { type: "error", name: "ERC1155MissingApprovalForAll", inputs: ["operator", "owner"] },
    { type: "error", name: "OwnableInvalidOwner", inputs: ["owner"] },
    { type: "error", name: "OwnableUnauthorizedAccount", inputs: ["account"] },
    
    { type: "event", name: "ApprovalForAll", inputs: ["account", "operator", "approved"] },
    { type: "event", name: "OwnershipTransferred", inputs: ["previousOwner", "newOwner"] },
    { type: "event", name: "TransferBatch", inputs: ["operator", "from", "to", "ids", "values"] },
    { type: "event", name: "TransferSingle", inputs: ["operator", "from", "to", "id", "value"] },
    { type: "event", name: "URI", inputs: ["value", "id"] },
  
    { type: "function", name: "PredictionMarketContracts", inputs: ["id"], outputs: ["address"] },
    { type: "function", name: "addPredictionMarket", inputs: ["id", "marketContract"] },
    { type: "function", name: "balanceOf", inputs: ["account", "id"], outputs: ["uint256"] },
    { type: "function", name: "balanceOfBatch", inputs: ["accounts", "ids"], outputs: ["uint256[]"] },
    { type: "function", name: "burn", inputs: ["account", "id", "amount"] },
    { type: "function", name: "burnBatch", inputs: ["account", "ids", "values"] },
    { type: "function", name: "isApprovedForAll", inputs: ["account", "operator"], outputs: ["bool"] },
    { type: "function", name: "mint", inputs: ["account", "id", "amount", "data"] },
    { type: "function", name: "owner", outputs: ["address"] },
    { type: "function", name: "removePredictionMarket", inputs: ["id"] },
    { type: "function", name: "renounceOwnership" },
    { type: "function", name: "safeBatchTransferFrom", inputs: ["from", "to", "ids", "values", "data"] },
    { type: "function", name: "safeTransferFrom", inputs: ["from", "to", "id", "value", "data"] },
    { type: "function", name: "setApprovalForAll", inputs: ["operator", "approved"] },
    { type: "function", name: "setURI", inputs: ["newuri"] },
    { type: "function", name: "supportsInterface", inputs: ["interfaceId"], outputs: ["bool"] },
    { type: "function", name: "transfer", inputs: ["to", "id", "amount"] },
    { type: "function", name: "transferOwnership", inputs: ["newOwner"] },
    { type: "function", name: "updatePredictionMarket", inputs: ["id", "marketContract"] },
    { type: "function", name: "uri", inputs: ["id"], outputs: ["string"] }
  ];
  
  export default TOKENSABI;
  