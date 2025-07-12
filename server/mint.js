require("dotenv").config();
const { ethers } = require("ethers");
const fs = require("fs");

// Setup
const abi = JSON.parse(fs.readFileSync("./abi.json", "utf-8"));
const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = "0x0Dd6b81e42A16D90399c602a5B30458cB928bAc2"; // Your deployed contract address

// Create contract instance
const contract = new ethers.Contract(contractAddress, abi, wallet);

// Mint function
async function main() {
  const recipient = wallet.address;
  const tokenURI = "https://gateway.pinata.cloud/ipfs/bafybeibv5lrgsen6ya6xu2xjhxrwcrkci5jflflu3fohwvzmacfka7gc3m/badge_diamond.json";

  const tx = await contract.mintNFT(recipient, tokenURI);
  await tx.wait();

  console.log("✅ NFT minted successfully!");
}

main().catch(console.error);
