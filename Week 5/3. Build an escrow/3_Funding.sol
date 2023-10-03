// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {
	address public arbiter;
	address public beneficiary;
	address public depositor;

	constructor(address _arbiter, address _beneficiary) payable { // the same as in the constructor + payable
		arbiter = _arbiter;
		beneficiary = _beneficiary;
		depositor = msg.sender;
	}
}