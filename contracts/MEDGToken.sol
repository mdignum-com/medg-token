pragma solidity ^0.5.7;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol';

contract MEDGToken is ERC20, ERC20Detailed, ERC20Pausable, ERC20Mintable, ERC20Burnable, ERC20Capped {
    constructor()
        ERC20()
        ERC20Detailed("MDignum Utility Token", "MEDG", 18)
        ERC20Pausable()
        ERC20Burnable()
        ERC20Mintable()
        ERC20Capped(10000000000 * (10 ** 18))
        public
    {}
}