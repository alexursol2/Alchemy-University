require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalTransactions(blockNumber) {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber", // number of the block
        params: [blockNumber, false],  // This is a variable representing the block number you want to retrieve information about
        // include the full transaction details in the response (true) or just the transaction hashes (false)
    });
    
    return response.data.result.transactions.length;
}

module.exports = getTotalTransactions;