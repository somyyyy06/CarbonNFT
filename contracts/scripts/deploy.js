const hre = require("hardhat");
const { parseUnits } = require("ethers"); 

async function main() {
  const CarbonNFT = await hre.ethers.getContractFactory("CarbonNFT");

  const contract = await CarbonNFT.deploy({
    gasLimit: 5000000,
    gasPrice: parseUnits("30", "gwei"), 
  });

  await contract.waitForDeployment();

  console.log("✅ Contract deployed at:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
