// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Token {
	uint256 public totalSupply;
	string public name = "1";
	string public symbol = "123";
	uint8 public decimals = 18;

	mapping(address => uint256) public map;
	function balanceOf(address addr) external view returns(uint256){
		
	}
}