const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }

    addBlock(block) {
        this.chain.push(block);
    }// push data of block in this.chain that`s why there is new Block()
}

module.exports = Blockchain;