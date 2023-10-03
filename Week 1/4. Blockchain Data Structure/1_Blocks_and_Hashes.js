const SHA256 = require('crypto-js/sha256');

class Block {
    toHash() {
        return SHA256(""); // create a function toHash information
    }
}


module.exports = Block;