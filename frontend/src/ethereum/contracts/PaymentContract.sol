// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract{
    address permanentRecipient =(0x2AC54F3F019bEE838A6EefFCf3fD8ecFE45BB91c); 
    function contributes(uint256 amount) public payable {
        require(msg.value == amount, "Sent value must match the specified amount");
        // address payable payableRecipient = payable(permanentRecipient);
        
        payable(permanentRecipient).transfer(amount);
    }
}

