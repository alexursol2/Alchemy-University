pragma solidity ^0.8.4;

contract Contract {
    function sumAndAverage(uint a, uint b, uint c, uint d) external pure returns(uint sum, uint average) {
        sum = a+b+c+d;
        average = sum/4;
    }
    // simple pure function that will return 2 variables sum and average
}