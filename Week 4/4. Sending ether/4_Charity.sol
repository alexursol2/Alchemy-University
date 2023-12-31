pragma solidity ^0.8.4;

contract Contract {
	address public owner;
	address public charity;

	constructor(address _charity) {
		owner = msg.sender;
		charity = _charity;
	}

	receive() external payable { }

	function donate() public {
		(bool success, ) = charity.call{ value: address(this).balance }(""); // send all money to charity address
		require(success);
	}

	function tip() public payable {
		(bool success, ) = owner.call{ value: msg.value }("");
		require(success);
	}
}