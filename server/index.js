require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mintNFT = require("./mint");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/mint", async (req, res) => {
  const { address, tokenURI } = req.body;

  if (!address || !tokenURI) {
    return res.status(400).json({ error: "Missing address or tokenURI" });
  }

  const result = await mintNFT(address, tokenURI);

  if (result.success) {
    res.json({
      message: "NFT minted successfully",
      txHash: result.txHash,
      tokenId: result.tokenId
    });
  } else {
    res.status(500).json({ error: result.error });
  }
});

app.listen(3001, () => {
  console.log("Carbon NFT API server running at http://localhost:3001");
});
