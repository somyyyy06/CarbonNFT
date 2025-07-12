const { ethers } = require("ethers");

const ALCHEMY_API_URL = "https://polygon-amoy.g.alchemy.com/v2/n9D1H-gBOJJh_YMQJ76lq";
const PRIVATE_KEY = "8ef934b2e7cda9fa25d649d683524e690033baa762a4be6933518ee62bf85eab";

async function main() {
  const provider = new ethers.JsonRpcProvider(ALCHEMY_API_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  
  const balance = await provider.getBalance(wallet.address);  // ✅ fix here
  console.log("Wallet address:", wallet.address);
  console.log("Balance:", ethers.formatEther(balance), "POL");
}

main();
