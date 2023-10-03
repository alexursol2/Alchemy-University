function setMessage(contract, signer) {
    return contract.connect(signer).modify("Hello World!");
    // owner cannot change this message! You'll need to connect the contract to a different signer in order to change it
}

module.exports = setMessage;