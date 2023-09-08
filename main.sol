// contracts/Counter.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public ethcount;

    constructor() {
        ethcount = 0;
    }

    function increment() public {
        ethcount++;
    }

    function decrement() public {
        require(ethcount > 0, "Count cannot go below zero");
        ethcount--;
    }

    function getCount() public view returns (uint256) {
        return ethcount;
    }
}
