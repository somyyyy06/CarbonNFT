require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.28",
      },
    ],
  },
  networks: {
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/n9D1H-gBOJJh_YMQJ76lq",
      accounts: ["8ef934b2e7cda9fa25d649d683524e690033baa762a4be6933518ee62bf85eab"],
    },
  },
};
