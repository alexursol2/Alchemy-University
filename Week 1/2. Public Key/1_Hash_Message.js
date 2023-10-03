const { keccak256 } = require("ethereum-cryptography/keccak"); // import another shiver/hash keccak256
const { utf8ToBytes } = require("ethereum-cryptography/utils"); // every hash message need convert to bytes

function hashMessage(message) {
    return keccak256(utf8ToBytes(message)); // hash (convert to bytes (message))
}

module.exports = hashMessage;