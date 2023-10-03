// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Define an interface called IHero with a single function called alert.
interface IHero {
    function alert() external;
}

// Define a contract called Sidekick.
contract Sidekick {
    // Define a function called sendAlert that takes an address called 'hero' as an argument.
    function sendAlert(address hero) external {
        // Call the 'alert' function of the 'IHero' interface on the provided 'hero' address.
        IHero(hero).alert();
    }
}