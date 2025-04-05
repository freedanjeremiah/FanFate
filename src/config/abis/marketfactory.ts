const addressInput = { internalType: "address", type: "address" };
const uint256Input = { internalType: "uint256", type: "uint256" };
const stringInput = { internalType: "string", type: "string" };

const createFunction = (name: string, inputs: any[] = [], outputs: any[] = [], stateMutability: string = "nonpayable") => ({
  name,
  inputs,
  outputs,
  stateMutability,
  type: "function",
});

const createError = (name: string, inputs: any[]) => ({
  name,
  inputs,
  type: "error",
});

const createEvent = (name: string, inputs: any[]) => ({
  anonymous: false,
  name,
  inputs,
  type: "event",
});

const FANFATE_CORE_ABI = [
  {
    type: "constructor",
    inputs: [addressInput, addressInput, addressInput],
    stateMutability: "nonpayable",
  },
  createError("OwnableInvalidOwner", [addressInput]),
  createError("OwnableUnauthorizedAccount", [addressInput]),
  createEvent("MarketCreated", [
    { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
    { indexed: false, internalType: "string", name: "question", type: "string" },
    { indexed: false, internalType: "uint256", name: "endTime", type: "uint256" },
    { indexed: false, internalType: "address", name: "marketContract", type: "address" },
    { indexed: false, internalType: "address", name: "priceToken", type: "address" },
    { indexed: false, internalType: "address", name: "yesToken", type: "address" },
    { indexed: false, internalType: "address", name: "noToken", type: "address" },
  ]),
  createEvent("OwnershipTransferred", [
    { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
    { indexed: true, internalType: "address", name: "newOwner", type: "address" },
  ]),
  createFunction("createMarket", [stringInput, uint256Input]),
  createFunction("marketCount", [], [{ internalType: "uint256", type: "uint256" }], "view"),
  createFunction("noToken", [], [addressInput], "view"),
  createFunction("noTokenContract", [], [{ internalType: "contract NoToken", type: "address" }], "view"),
  createFunction("owner", [], [addressInput], "view"),
  createFunction("priceToken", [], [addressInput], "view"),
  createFunction("renounceOwnership", []),
  createFunction("setNoToken", [addressInput]),
  createFunction("setPriceToken", [addressInput]),
  createFunction("setYesToken", [addressInput]),
  createFunction("transferOwnership", [addressInput]),
  createFunction("yesToken", [], [addressInput], "view"),
  createFunction("yesTokenContract", [], [{ internalType: "contract YesToken", type: "address" }], "view"),
] as const;

export default FANFATE_CORE_ABI;
