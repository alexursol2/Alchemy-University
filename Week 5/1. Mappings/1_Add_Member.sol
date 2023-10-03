pragma solidity ^0.8.4;

contract Contract {
	mapping(address => bool) public members;

	function addMember(address x) external {
		members[x] = true;
	}
    // example of using a mapping and how to store a value
}