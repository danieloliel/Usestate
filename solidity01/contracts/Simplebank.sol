// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 
contract Simplebank {
  address[] public funders;  //מסוג מערך funders משתנה שנקרא
  uint[] public funds;
 // uint public funds = 500;    // קבוע שערכו 500 לעולמי עד
  function addFunds() external payable{ //מגדיר טרנזקציה ששולחת לחוזה החכם כסף
    funders.push(msg.sender);  // מכניס לרשימה את מי ששולח לי כסף
    funds.push(msg.value);
    }
  

}


//const instance = await Simplebank.deployed()
//instance.addFunds({value:"500000000000000000", from: accounts[0]}) // העברה של חצי איתר ממשתמש 0 לחוזה החכם
//instance.addFunds({value:"500000000000000000", from: accounts[1]}) //העברה של חצי איתר ממשתמש 1 לחוזה החכם
//const funds = instance.funds()

// כרגע אף אחד בעולם לא יכול למשוך את ה1 איתר שיש בחוזה החכם כי לא אפשרנו פונקציונליות כזאת עדיין