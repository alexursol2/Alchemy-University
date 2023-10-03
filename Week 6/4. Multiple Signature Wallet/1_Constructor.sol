// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract MultiSig {
    address[] public owners;
    uint public required;

    constructor(address[] memory _owners, uint _required) { 
        owners = _owners; // we will use the list of owners who can sign the contract
        required = _required; // to store the required amount of confirmations needed to execute a transaction
    }
}