// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	enum ConnectionTypes { 
		Unacquainted,
		Friend,
		Family
	}
	
	mapping(address => mapping(address => ConnectionTypes)) public connections; // mapping in mapping

	function connectWith(address other, ConnectionTypes connectionType) external {
		connections[msg.sender][other] = connectionType; // first the address then again but other address, finally,
        // it is equal to one of connectionType (Unacquainted, Friend, Family)
	}
}