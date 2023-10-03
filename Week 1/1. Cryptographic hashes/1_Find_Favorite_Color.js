const { sha256 } = require("ethereum-cryptography/sha256"); // import sha256 for hashing
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils"); // import convert string to bytes and then toHex

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (var i = 0; i < COLORS.length; i++){
        if (toHex(sha256(utf8ToBytes(COLORS[i]))) == toHex(hash)) return COLORS[i];
        // there is the problem that we cannot compare 2 hash so we use toHex
        // in addition, to use sha256 we need to convert everything in bytes, utf8ToBytes
    } 
}

module.exports = findColor;