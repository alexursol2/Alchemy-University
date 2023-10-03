function approve(contract, arbiterSigner) {
    return contract.connect(arbiterSigner).approve();
}
// approved function in the JS
module.exports = approve;