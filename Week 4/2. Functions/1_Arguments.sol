// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	uint public x;

	constructor(uint _x) {
		x = _x;
	}
    // This means that when the contract is deployed, 'x' will be initialized with the value passed to the constructor.
    
}