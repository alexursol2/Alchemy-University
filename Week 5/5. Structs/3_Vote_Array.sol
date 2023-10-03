// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	enum Choices { Yes, No }
	
	struct Vote { 
		Choices choice;
		address voter;
	}
	
	Vote[] public votes; // a dynamic size list

	function createVote(Choices choice) external {
		votes.push(Vote(choice, msg.sender));
	}
}