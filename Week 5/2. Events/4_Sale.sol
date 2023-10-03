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
	function markPrice(uint _price) external {
		require(msg.sender == owner);
		price = _price;
		emit ForSale(price, block.timestamp);
	}

	event Purchase(uint, address);
	function purchase() payable external { // successful purchase mechanism with event 
		require(msg.value == price, "1");
		require(price > 0, "2");
		price = 0;
		(bool success, ) = owner.call{ value: msg.value }("");
		require(success);
		owner = msg.sender;
		emit Purchase(msg.value, msg.sender);
	} 
}