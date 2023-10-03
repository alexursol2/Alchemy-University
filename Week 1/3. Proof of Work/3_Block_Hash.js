const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const block = { id: blocks.length }
    const hash = SHA256(JSON.stringify(block)); // do the hash sha256 to the JSON.stringify of block
    blocks.push({ ...block, hash }); // Push a new object into the 'blocks' array with the 'block' properties and the calculated 'hash'.
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    mempool,
    blocks,
};