const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];
//The mempool is a place for miners to keep those transactions before adding them to a block.
//Typically, the miner will take all the transactions with the highest transaction fees from the mempool. 
//Then they'll add them to the block and attempt to find the proof of work.
function addTransaction(transaction) {
    mempool.push(transaction); // adding a transaction to a mempool
}

function mine() {
    // TODO: mine a block
}

module.exports = { // these variables will return
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};