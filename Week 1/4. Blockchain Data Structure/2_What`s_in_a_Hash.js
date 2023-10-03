const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) { // create a data and initialize it
        this.data = data;
    }

    toHash() {
        return SHA256(this.data); // return a hash of data
    }
}

module.exports = Block;