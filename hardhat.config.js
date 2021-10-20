require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {version: "0.7.3"},
      {version: "0.8.6"}
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    artifacts: "./src/artifacts"
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: process.env["API_KEY_RINKEBY"],
      accounts: [process.env["PRIVATE_KEY"]] 
    },
    kovan: {
      url: process.env["API_KEY_KOVAN"],
      accounts: [process.env["PRIVATE_KEY"]] 
    }
  },
};