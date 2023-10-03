// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
// In Solidity it is perfectly valid to declare two functions with the same name if they have different parameters
contract Contract {
	function double(uint x) public pure returns(uint) {
		return x * 2;
	}
	
	function double(uint a, uint b) external pure returns(uint, uint) {
		return (double(a), double(b));
	}
}