const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const messageHash = await hashMessage(message);
    const publicKey = await secp.recoverPublicKey(messageHash, signature, recoveryBit);
    return publicKey;
}

module.exports = recoverKey;
