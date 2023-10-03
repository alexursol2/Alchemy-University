const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

// Create a new Web3 provider using the Ganache provider.
const provider = new providers.Web3Provider(ganacheProvider);

// Define the findEther() function.
async function findEther(address) {
  // Create an empty list to store the addresses that the input address has sent Ether to.
  const addresses = [];

  // Get the current block number.
  const blockNumber = await provider.getBlockNumber();

  // Iterate over all the blocks from the current block number down to block number 0.
  for (let i = 0; i <= blockNumber; i++) {
    // Get the transactions for the current block.
    const block = await provider.getBlockWithTransactions(i);

    // Iterate over all the transactions in the block.
    block.transactions.forEach((tx) => {
      // Check if the sender address is the input address.
      if (tx.from === address) {
        // Add the recipient address to the list of addresses.
        addresses.push(tx.to);
      }
    });
  }

  // Return the list of addresses.
  return addresses;
}

// Export the findEther() function.
module.exports = findEther;