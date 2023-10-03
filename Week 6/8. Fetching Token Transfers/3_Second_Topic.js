const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

function firstTopic() {
    const eventSignature = "Transfer(address,address,uint256)"; 
    const bytes = utf8ToBytes(eventSignature);
    const digest = keccak256(bytes);
    return toHex(digest); 
}

function secondTopic() {
    // This function returns the hex string of the address
    const address = "28c6c06298d514db089934071355e5743bf21d60";
    // Pad the address with 0s to make it 32 bytes long
    return "0".repeat(24) + address;
}

module.exports = { firstTopic, secondTopic }