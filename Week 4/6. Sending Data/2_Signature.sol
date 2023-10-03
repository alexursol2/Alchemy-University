pragma solidity ^0.8.4;

// Define the Sidekick contract.
contract Sidekick {
    // Define a function called sendAlert that takes an address called 'hero' as an argument.
    function sendAlert(address hero) external {
        // Calculate the function signature of the "alert()" function in bytes4 format.
        bytes4 signature = bytes4(keccak256("alert()"));

        // Use the 'call' function to invoke the 'alert()' function on the 'hero' contract.
        // Encode the function call and capture the success status.
        (bool success, ) = hero.call(abi.encodePacked(signature));

        // Require that the function call was successful; otherwise, revert the transaction.
        require(success);
    }
}
