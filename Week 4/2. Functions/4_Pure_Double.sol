// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	function double(uint x) public pure returns(uint) {
		return x * 2;
	} // pure, only variables inside the function
}