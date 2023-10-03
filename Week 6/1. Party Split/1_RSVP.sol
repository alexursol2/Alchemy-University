// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Party {
    uint deposit;
    address[] members;
    mapping(address => bool) paid;

	constructor(uint _deposit) {
        deposit = _deposit;
    } // set the amount of deposit

    function rsvp() external payable {
        require(!paid[msg.sender]); // check if he paid
        require(msg.value == deposit); // set exactly amount of money for deposit
        members.push(msg.sender);
        paid[msg.sender] = true;
    }
}