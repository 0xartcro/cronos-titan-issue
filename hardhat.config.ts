import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-chai-matchers'
import '@openzeppelin/hardhat-upgrades'

const PRIV_KEY = 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' // Hardhat Private Key
const API_KEY = ''

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          }
        },
      },
    ],
  },
  networks: {
    cronos: {
      url: "https://rpc.vvs.finance",
      accounts: [PRIV_KEY],
    },
  },
  etherscan: {
    // apiKey: {
    //   cronos: API_KEY,
    // },
    customChains: [
      {
        network: "cronos",
        chainId: 25,
        urls: {
          apiURL: "https://api.cronoscan.com/api",
          browserURL: "https://cronoscan.com/",
        },
      },
    ]
  }
};

export default config;
