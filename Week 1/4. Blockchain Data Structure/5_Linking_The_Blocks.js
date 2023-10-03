const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        // determine previousHash to last id chain data all information is converted to Hash
        this.chain.push(block); // push this updated info
    }
}

module.exports = Blockchain;