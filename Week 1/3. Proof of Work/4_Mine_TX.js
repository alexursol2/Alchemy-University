const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = []; // this array for N transactions in order typically with the highest fee
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions = []; // create a massive for approved transactions 
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) { 
        // there is a condition that it should be less than 10 transactions and mempool must have at least one element in array
        transactions.push(mempool.pop()); //add element from the last deleted of mempool
    }
    const block = { id: blocks.length, transactions }
    const hash = SHA256(JSON.stringify(block));
    blocks.push({ ...block, hash })
    // we are using "..." to copy all properties/elements of block it means we copy "id" and "transactions"
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    mempool,
    blocks,
};