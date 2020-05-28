const Wallet = require('ethereumjs-wallet')
const fs = require('fs');
const KeysManager = artifacts.require("./KeysManager.sol");
const contracts = require("./contracts.json");


module.exports = (callback) => {
    let keyManager = KeysManager.at(contracts.KEYS_MANAGER_ADDRESS);
    let miningKey = Wallet.generate();
    let votingKey = Wallet.generate();
    let payoutKey = Wallet.generate();
    fs.writeFileSync('./miningKey.json', miningKey.toV3String("ceremony"));
    fs.writeFileSync('./votingKey.json', votingKey.toV3String("ceremony"));
    fs.writeFileSync('./payoutKey.json', payoutKey.toV3String("ceremony"));
    keyManager.createKeys(miningKey.getAddressString(), votingKey.getAddressString(), payoutKey.getAddressString()).then(() =>{
        callback()
    })


}