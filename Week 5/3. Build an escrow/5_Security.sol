// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {
	address public arbiter;
	address payable public beneficiary;
	address public depositor;

	bool public isApproved;

	constructor(address _arbiter, address payable _beneficiary) payable {
		arbiter = _arbiter;
		beneficiary = _beneficiary;
		depositor = msg.sender;
	}

	function approve() external {
		require(msg.sender == arbiter); // deployer of the contract must be the arbiter
		(bool sent, ) = beneficiary.call{ value: address(this).balance }("");
		require(sent, "Failed to send Ether");
		isApproved = true;
	}
}