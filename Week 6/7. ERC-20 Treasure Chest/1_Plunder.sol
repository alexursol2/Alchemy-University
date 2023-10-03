// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IERC20.sol";

contract Chest {
    function plunder(address[] calldata erc20s) external {
        // There will be an ERC20 Token deployed to each of these addresses in the array.
        for(uint i = 0; i < erc20s.length; i++) {
            IERC20 token = IERC20(erc20s[i]);
            uint balance = token.balanceOf(address(this));
            token.transfer(msg.sender, balance);
            // Transfer the entire balance of each of these tokens owned by the Chest address
        }
    }
}
