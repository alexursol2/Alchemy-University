// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library Prime {
    function dividesEvenly(uint number1, uint number2) public pure returns(bool){
        return number1 % number2 == 0;
    }

    function isPrime(uint x) public pure returns(bool) {
		for(uint i = 2; i <= x / 2; i++) {
			if(dividesEvenly(x, i)) {
				return false;
			}
		}
		return true;
	}
}