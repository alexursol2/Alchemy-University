// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow { // setup for escrow 
	address public arbiter; // The approver of the transaction
	address public beneficiary; // The receiver of the funds
	address public depositor; // makes the initial deposit 
}