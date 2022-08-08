/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();

require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: "auto", // Limit the gas to x number.
      gasPrice: "auto", // 25 gwei (in wei) (default: 100 gwei)
    },
    localhost: {
      url: "http://127.0.0.1:7545",
    },
  },
};
