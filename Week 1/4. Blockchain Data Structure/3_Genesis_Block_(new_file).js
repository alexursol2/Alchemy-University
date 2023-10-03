const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() ]; // creating new object with properties in the this.chain
    }
}

module.exports = Blockchain;