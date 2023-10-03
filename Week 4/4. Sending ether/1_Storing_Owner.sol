// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    address public owner;
    // This variable will store the Ethereum address of the contract owner.

    constructor() {
        owner = msg.sender;
        // It initializes the 'owner' variable with the address of the account that deploys the contract ('msg.sender').
    }
}