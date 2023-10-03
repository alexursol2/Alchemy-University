// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	constructor() payable { // payable constructor method that requires a 1 ether deposit
		require(msg.value >= 1 ether, "Not enough ether sent");
	}
}