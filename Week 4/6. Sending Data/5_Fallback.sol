// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Sidekick {
    function makeContact(address hero) external {
        (bool success, ) = hero.call(abi.encodeWithSignature("alert(uint,bool)", 10, true)); // the same as With Signature

        require(success);
    }
}