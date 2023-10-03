function transfer(contract, friend) {
    return contract.transfer(friend, 100); // friend is an address, 100 is amount to send
}

module.exports = transfer;