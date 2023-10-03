require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalBalance(addresses) {
    const batch = addresses.map((addr, i) => ({ // It creates a batch array by mapping over the provided addresses array
        jsonrpc: "2.0",
        id: i,
        method: "eth_getBalance",
        params: [addr],
    }));

    const response = await axios.post(url, batch);

    return response.data.reduce((p,c) => p + parseInt(c.result), 0);
    // After receiving the response from the Alchemy API, it uses the reduce method to iterate through the results of each request 
    // (c.result contains the balance) and accumulates them to calculate the total balance of all the provided Ethereum addresses.
}

module.exports = getTotalBalance;