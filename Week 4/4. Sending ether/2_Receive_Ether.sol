pragma solidity ^0.8.4;

contract Contract {
	address public owner;

	constructor() {
		owner = msg.sender;
	}

	receive() external payable {

	}
    // Receive does not use the function keyword. This is because it is a special function (like constructor). 
    // It is the function that runs when a contract is sent ether without any calldata.
    // The receive function must be external, payable, it cannot receive arguments and it cannot return anything.
}