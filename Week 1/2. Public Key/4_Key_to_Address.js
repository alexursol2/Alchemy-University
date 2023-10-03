const { keccak256 } = require("ethereum-cryptography/keccak"); // import another shiver/hash keccak256

function getAddress(publicKey) {
    return keccak256(publicKey.slice(1)).slice(-20); 
    // slice(1) delete first element, then take last 20 elements
}

module.exports = getAddress;