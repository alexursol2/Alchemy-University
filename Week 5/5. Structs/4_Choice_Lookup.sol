// SPDX-License-Identifier: MIT
// The above line specifies the license for this contract.

pragma solidity ^0.8.4;

contract Contract {
    enum Choices { Yes, No } // Define an enumeration for voting choices (Yes and No).

    struct Vote {
        Choices choice;
        address voter;
    }

    Vote none = Vote(Choices(0), address(0)); // Initialize a "none" vote to handle non-existent votes.

    Vote[] public votes; // Declare a public array to store votes.

    function createVote(Choices choice) external {
        // Function to create a new vote with the specified choice and the sender's address.
        votes.push(Vote(choice, msg.sender));
    }

    function findVote(address voter) internal view returns (Vote storage) {
        // Function to find a vote by a given voter's address.
        for (uint i = 0; i < votes.length; i++) {
            if (votes[i].voter == voter) {
                return votes[i];
            }
        }
        return none; // Return the "none" vote if the voter hasn't voted.
    }

    function hasVoted(address voter) public view returns (bool) {
        // Function to check if a voter has already voted.
        return findVote(voter).voter == voter;
    }

    function findChoice(address voter) external view returns (Choices) {
        // Function to find and return the choice made by a specific voter.
        return findVote(voter).choice;
    }
}
