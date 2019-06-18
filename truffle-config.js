require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = process.env.INFURA_KEY;
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 4500000,
      gasPrice: 25000000000,
      network_id: '*' 
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: '*',
      gas: 4500000,
      gasPrice: 1100000000
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: '*',
      gas: 4500000,
      gasPrice: 1100000000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.8"
    }
  }
}
