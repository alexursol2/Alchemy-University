// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	function getSecret(string memory) public view returns(uint) {
		return 1337;
	}
}