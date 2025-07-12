require("dotenv").config();
const pinataSDK = require("@pinata/sdk");

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

async function uploadMetadata() {
  const metadata = {
    name: "Low Carbon Purchase",
    description: "You earned this NFT for making a low-carbon purchase (1.7 kg CO₂).",
    image: "https://gateway.pinata.cloud/ipfs/QmExampleImageHash", // ← Replace this
    attributes: [
      {
        trait_type: "Carbon Score",
        value: "1.7 kg CO₂"
      },
      {
        trait_type: "Category",
        value: "Clothing"
      },
      {
        trait_type: "Reward",
        value: "10% off coupon"
      }
    ]
  };

  try {
    const result = await pinata.pinJSONToIPFS(metadata);
    console.log("✅ Metadata pinned to IPFS!");
    console.log("👉 tokenURI:", `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`);
  } catch (error) {
    console.error("❌ Error uploading metadata:", error);
  }
}

uploadMetadata();
