// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BCDToken is ERC20 {
    constructor() ERC20("Berducedo", "BCD") {
        _mint(msg.sender, 1000  * 10**18);
    }
}
