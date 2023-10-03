// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
	address owner;
	uint price;

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
	}

	event ForSale(uint, uint);
	function markPrice(uint _price) external { // set the price and get information outside the smart contract by event
		require(msg.sender == owner);
		price = _price;
		emit ForSale(price, block.timestamp);
	}
}