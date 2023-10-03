// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./Hero.sol";

contract Warrior is Hero(200) { 
    function attack(address _enemyAddress) public override { // the same name of function that use several times
        Enemy enemy = Enemy(_enemyAddress);
        enemy.takeAttack(Hero.AttackTypes.Brawl);
    }
}

contract Mage is Hero(50) { 
    function attack(address _enemyAddress) public override {
        Enemy enemy = Enemy(_enemyAddress);
        enemy.takeAttack(Hero.AttackTypes.Spell);
    }
}