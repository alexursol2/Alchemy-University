// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	enum Choices { Yes, No } // create enum for struct
	
	struct Vote {
		Choices choice;
		address voter;
	}

	Vote public vote; // announce struct

	function createVote(Choices choice) external {
		vote = Vote(choice, msg.sender); // fill the vote struct
	}
}