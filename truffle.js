const fs = require('fs');
const PrivateKeyProvider = require("truffle-privatekey-provider");
let privatekey = "0x0000000000000000000000000000000000000000000000000000000000000000";
const path = "./initialKey.private";
if(fs.existsSync(path)){
  privatekey = fs.readFileSync(path).toString();
}
const fakeProvider = new PrivateKeyProvider(privatekey.substring(2), "http://localhost:8545")

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6600000,
      network_id: "*" // Match any network id
    },
    test: {
      host: "localhost",
      port: 8544,
      gas: 6600000,
      network_id: "*" // Match any network id
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    sokol: {
      host: "localhost",
      port: 8545,
      gas: 6400000,
      network_id: "*" // Match any network id
    },
    fakeCeremony: {
      provider: fakeProvider,
      gas: 6400000,
      gasPrice: "0",
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    reporter: 'mochawesome',
    enableTimeouts: false
  }
};
