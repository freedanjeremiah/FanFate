import { ethers, run, network } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  // Ensure the private key is available in the .env file
  const privateKey = process.env.PRIVATE_KEY as string;
  if (!privateKey) {
    throw new Error("Private key not found in environment variables");
  }

  // Initialize the wallet
  const wallet = new ethers.Wallet(privateKey, ethers.provider);
  console.log("Wallet address:", wallet.address);

  // Load contract artifacts
  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const YesToken = await ethers.getContractFactory("YesToken");
  const NoToken = await ethers.getContractFactory("NoToken");
  const fanfateCore = await ethers.getContractFactory("fanfateCore");

  // Step 1: Deploy MockERC20
  const mockUSDC = await MockERC20.deploy("USD Coin", "USDC");
  console.log("MockERC20 (USDC) deployed to:", mockUSDC.address);

  // Step 2: Deploy YesToken
  const yesToken = await YesToken.deploy(wallet.address);
  console.log("YesToken deployed to:", yesToken.address);

  // Step 3: Deploy NoToken
  const noToken = await NoToken.deploy(wallet.address);
  console.log("NoToken deployed to:", noToken.address);

  // Step 4: Deploy fanfateCore
  const fanfateCore = await fanfateCore.deploy(
    mockUSDC.address,
    yesToken.address,
    noToken.address
  );
  console.log("fanfateCore deployed to:", fanfateCore.address);

  // Step 5: Transfer ownership of YesToken and NoToken to fanfateCore
  let tx = await yesToken.transferOwnership(fanfateCore.address);
  await tx.wait();
  console.log("YesToken ownership transferred to fanfateCore");

  tx = await noToken.transferOwnership(fanfateCore.address);
  await tx.wait();
  console.log("NoToken ownership transferred to fanfateCore");

  // Verify contracts (optional, for Etherscan or other block explorers)
  if (network.name !== "hardhat") {
    console.log("Verifying contracts...");

    await run("verify:verify", {
      address: mockUSDC.address,
      constructorArguments: ["USD Coin", "USDC"],
    });

    await run("verify:verify", {
      address: yesToken.address,
      constructorArguments: [wallet.address],
    });

    await run("verify:verify", {
      address: noToken.address,
      constructorArguments: [wallet.address],
    });

    await run("verify:verify", {
      address: fanfateCore.address,
      constructorArguments: [
        mockUSDC.address,
        yesToken.address,
        noToken.address,
      ],
    });
  }

  // Step 6: Create a market in fanfateCore (optional, for market creation)
  const question = "Will MrBeast reach 200M YouTube subscribers by March 2024?";
  const endTime = Math.floor(Date.now() / 1000) + 86400 * 30; // 30 days from now

  const createMarketTx = await fanfateCore.createMarket(question, endTime);
  console.log("Market creation transaction:", createMarketTx.hash);

  // Wait for the transaction to be confirmed
  await createMarketTx.wait();
  console.log("Market creation confirmed");
}

// Run the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
