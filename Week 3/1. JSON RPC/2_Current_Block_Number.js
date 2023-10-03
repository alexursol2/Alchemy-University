const axios = require('axios'); // making HTTP requests in Node.js. It will be used to send an HTTP POST request to the Alchemy API.

// grab the API key from the .env
require('dotenv').config();
const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.API_KEY}`; // line constructs the URL for the Alchemy API

async function getBlockNumber() {
    //It sends a JSON-RPC request to the Ethereum network, specifically requesting the block number using the "eth_blockNumber" method.
    const response = await axios.post(url, {
        jsonrpc: "2.0", // JSON-RPC version
        id: 1, // Request ID
        method: "eth_blockNumber", // Method to get block number
    });

    return response.data.result; // This result will contain the current block number of the Ethereum mainnet
}

module.exports = getBlockNumber;