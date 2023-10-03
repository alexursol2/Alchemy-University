const secp = require("ethereum-cryptography/secp256k1"); // import secp special for sign the message
const hashMessage = require('./hashMessage'); // import function from 1_Hash_Message.js

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"; 
// not publish it, we need private key to sign the message
async function signMessage(msg) {
    return secp.sign(hashMessage(msg), PRIVATE_KEY, { recovered: true });
    // secp.sign - sign the message, 1. Hash message, 2. Private key 3. Just remember that need write it
}

module.exports = signMessage;