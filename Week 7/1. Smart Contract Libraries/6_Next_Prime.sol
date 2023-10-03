// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Prime.sol";

contract PrimeGame {
    using Prime for uint; // Remember this line for libraries

    function isWinner() public view returns (bool) {
        return block.number.isPrime();
    }
}