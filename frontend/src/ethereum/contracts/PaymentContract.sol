// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract{
    address permanentRecipient =(0x1Af0AC7439c7fa31df4bc8adE4A68954B901A54B); 
    function contributes(uint256 amount) public payable {
        require(msg.value == amount, "Sent value must match the specified amount");
        // address payable payableRecipient = payable(permanentRecipient);
        
        payable(permanentRecipient).transfer(amount);
    }
}

