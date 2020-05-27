const Web3 = require('web3')
const Wallet = require('ethereumjs-wallet')
const fs = require('fs');
const KeysManager = artifacts.require("./KeysManager.sol");
const contracts = require("./contracts.json");

module.exports = async () => {
    let keyManager = KeysManager.at(contracts.KEYS_MANAGER_ADDRESS);
    console.log(keyManager.address + "hello");
}