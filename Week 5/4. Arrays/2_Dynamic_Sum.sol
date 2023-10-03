// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	function sum(uint[] calldata x) external pure returns(uint total) { // the same but without fix number
		for(uint i = 0; i < x.length; i++) {
			total += x[i];
		}
	}
}