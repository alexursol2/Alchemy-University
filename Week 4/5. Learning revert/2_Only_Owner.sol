// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	address owner;

	constructor() payable {
		owner = msg.sender; // creator is the owner
		require(msg.value >= 1 ether, "Not enough ether sent");
	}

	function withdraw() public {
		require(msg.sender == owner);  // msg.sender must be the owner
		payable(msg.sender).transfer(address(this).balance); // we use function transfer and amount is money
	}
}