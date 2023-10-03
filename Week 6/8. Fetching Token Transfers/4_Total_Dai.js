// Import required libraries
require("dotenv").config(); // Load environment variables from a .env file
const { Alchemy, Network } = require("alchemy-sdk"); // Import Alchemy SDK
const { firstTopic, secondTopic } = require('./topics'); // Import custom topics from a local file

// Prefix both the topics with '0x'
const topics = [firstTopic(), secondTopic()].map((x) => '0x' + x);

// Configuration for Alchemy API
const config = {
    apiKey: process.env.API_KEY, // API key from environment variables
    network: Network.ETH_MAINNET, // Ethereum mainnet
};

// Create an instance of the Alchemy client
const alchemy = new Alchemy(config);

// Function to calculate the total DAI (token) transferred between two blocks
async function totalDaiTransferred(fromBlock, toBlock) {
    // Get logs (events) from a specific Ethereum contract address within a block range
    const logs = await alchemy.core.getLogs({
        address: "0x6b175474e89094c44da98b954eedeac495271d0f", // Ethereum contract address (DAI token)
        fromBlock, // Starting block number
        toBlock, // Ending block number
        topics, // Event topics to filter by
    });

    // Extract the data field from each log and convert it to a BigInt
    const daiTransfers = logs
        .map((x) => BigInt(x.data));

    // Calculate the total DAI transferred by summing up all transfers
    const totalDai = daiTransfers.reduce((previous, current) => previous + current);

    return totalDai; // Return the total DAI transferred
}

module.exports = totalDaiTransferred; // Export the function for use in other modules