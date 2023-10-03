const ethers = require('ethers');

function deposit(contract) {
    return contract.deposit({ value: ethers.utils.parseEther("1") }); // for message value
}

module.exports = deposit;