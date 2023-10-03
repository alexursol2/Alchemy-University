const ethers = require('ethers');

function deploy(abi, bytecode, signer, arbiterAddress, beneficiaryAddress) {
    const factory = new ethers.ContractFactory(abi, bytecode, signer);
    return factory.deploy(arbiterAddress, beneficiaryAddress, {
        value: ethers.utils.parseEther("1")
    }); // just remember what need for deploying the escrow smart contract 
}

module.exports = deploy;