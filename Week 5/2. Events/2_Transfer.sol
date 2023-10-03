// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
	address owner;

	event Deployed(address);
	constructor() {
		owner = msg.sender;
		emit Deployed(msg.sender);
	}

	event Transfer(address, address);
	function transfer(address recipient) external {
		require(msg.sender == owner);
		owner = recipient;
		emit Transfer(msg.sender, recipient);
	} // we can get information who is the sender and who is the receiver outside of smart contract
}