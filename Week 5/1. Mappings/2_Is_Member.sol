// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	mapping(address => bool) public members;

	function addMember(address x) external {
		members[x] = true;
	}

	function isMember(address x) external view returns(bool) {
		return members[x];
	}
    // check is the person a member
}