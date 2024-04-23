// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

abstract contract ERC20test is Context {
    mapping(address account => uint256) private _balances;

    mapping(address account => mapping(address spender => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    uint256 public uniqueId;

    constructor() {
        uniqueId = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender)));
    }
    // constructor() ERC20("MyToken", "MTK") {
    //     _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    // }

    function balanceOf(address account) public view virtual returns (uint256) {
        return _balances[account];
    }
}