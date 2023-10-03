// Import required libraries
require("dotenv").config(); // Load environment variables from a .env file
const { Alchemy, Network } = require("alchemy-sdk"); // Import Alchemy SDK

// Configuration for Alchemy API
const config = {
    apiKey: process.env.API_KEY, // API key from environment variables
    network: Network.ETH_MAINNET, // Ethereum mainnet
};

// Create an instance of the Alchemy client with the provided configuration
const alchemy = new Alchemy(config);

// Function to calculate the total ERC-20 transfers between two blocks
async function totalErc20Transfers(fromBlock, toBlock) {
    // Retrieve ERC-20 token transfer information within a block range
    const res = await alchemy.core.getAssetTransfers({
        fromBlock, // Starting block number
        toBlock, // Ending block number
        fromAddress: "0x28c6c06298d514db089934071355e5743bf21d60", // Ethereum address to filter by
        category: ["erc20"], // Filter by ERC-20 token transfers
    });

    // Return the total count of ERC-20 transfers within the specified block range
    return res.transfers.length;
}

module.exports = totalErc20Transfers; // Export the function for use in other modules