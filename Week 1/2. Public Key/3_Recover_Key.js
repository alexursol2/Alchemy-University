const secp = require("ethereum-cryptography/secp256k1"); // import secp special for recover Public Key
const hashMessage = require("./hashMessage"); // import function from 1_Hash_Message.js

async function recoverKey(message, signature, recoveryBit) {
    const messageHash = await hashMessage(message); // hash message
    const publicKey = await secp.recoverPublicKey(messageHash, signature, recoveryBit);
    // to recover public key we need secp.recoverPublicKey 
    // 1. hash message 2. signature that we did last time 3. there can be 2 possible public key
    return publicKey;
}

module.exports = recoverKey;