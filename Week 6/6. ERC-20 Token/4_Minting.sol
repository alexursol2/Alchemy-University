pragma solidity ^0.8.4; // Solidity compiler version used.

contract Token {
	string public name = "Falafel"; // Token name.
	string public symbol = "FLF"; // Token symbol.
	uint8 public decimals = 18; // Token decimals.

	uint256 public totalSupply; // Total token supply.
	mapping (address => uint256) balances; // Mapping to store token balances for each address.

    constructor() {
        totalSupply = 1000 * (10 ** uint256(decimals)); // Total supply set to 1000 with 18 decimal places.
        balances[msg.sender] = totalSupply; // Assign the total supply to the contract creator's address.
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner]; // Function to check the balance of a specific address.
    }
}
