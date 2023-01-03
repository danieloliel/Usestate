// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 
contract Simplebank {
  uint public numberOfFunders; //גם אם לא מגדירים הוא יודע שהוא שווה ל0
  mapping(address => bool) private funders; //need the boolian for the if in line 11
  mapping(uint => address) private lutFunders; //lookup for the boolian mapping
  address public owner;

  constructor (){  // פונקציה שרצה שנוצר החוזה
   owner  =  msg.sender; // יישמר הכתובת של מי שיצר את החוזה
  }// יצירת החוזה היא בעצם טרנזקציה שמבצע הבעלים של החוזה

  modifier onlyOwner(){ //במטרה להגביל גישה רק לבעלי החוזה החכם לגשת לפונקציות מסוימות
    require(msg.sender == owner,"Only the owner can do that");
    _; //משהו שצריך להיות במודיפייר
  }

function transferOwnership(address newOwner) external onlyOwner { //העברת בעלות על החוזה כאשר רק הבעלים הנוכחי יכול לעשות את זה
  owner = newOwner;
}


  function addFunds() external payable{ //מגדיר טרנזקציה ששולחת לחוזה החכם כסף
      address funder = msg.sender;
      if(!funders[funder]){ //אם הערך לא נמצא ברשימה 
        uint index = numberOfFunders++; //נקדם את מספר המפקידים ב1
// עבור המפקיד הראשון אינדקס שווה ל0 ולא ל1 כי שמנו את הפלוס פלוס אחרי המשתנה ולא לפניו
        funders[funder] = true; // הוספת מפקיד חדש לתוך המשתנה פאנדרס
        lutFunders[index] = funder;
        //האינדקס הוא מספר אחד פחות מהמספר
    }
 }

function getAllFunders() external view returns(address[] memory) { // אפשר לקרוא לפונקציה רק מבחוץ, ולא מתוך פונקציות פנימייות בחוזה וכן לא משנה סטייט של חוזה חכם כלומר קריאה בלבד
// הפונקציה מחזירה מערך
  address[] memory _funders = new address[](numberOfFunders);  //משתנה זמני שלא נשמר בבלוקציין
  for(uint i=0;i<numberOfFunders;i++){
    _funders[i] = lutFunders[i]; //מעביר את שמות המפקידים מהמפינג למשתנה המקומי
  }
  return _funders;
  }

function withdraw(uint withdrawAmount) external  {
 // require(withdrawAmount < 1000000000000000000 || msg.sender == owner, "You can't withdraw more then 1 ether"); //שומר סף למשיכת במשיכה אחת אסור למשוך יותר מ1 איתר
 // כאשר הבעלים של החוזה לא מוגבל בסכום המשיכה
  payable (msg.sender).transfer(withdrawAmount);  //שליחת כסף מהבלוקציין למפקיד
}





}  





//const instance = await Simplebank.deployed()
//instance.addFunds({value:"500000000000000000", from: accounts[0]}) // העברה של חצי איתר ממשתמש 0 לחוזה החכם
//instance.addFunds({value:"500000000000000000", from: accounts[1]}) //העברה של חצי איתר ממשתמש 1 לחוזה החכם

//instance.getAllFunders()
// כרגע אף אחד בעולם לא יכול למשוך את ה1 איתר שיש בחוזה החכם כי לא אפשרנו פונקציונליות כזאת עדיין
//truffle migrate --reset 
//דריסת החוזה הקודם ויצירת חוזה חדש

//instance.withdraw(1000000000000000000, {from: accounts[0]})
//instance.withdraw(1000000000000000000)
//instance.transferOwnership("0x346861bd8A030B84E0Afc48d54f70f40B8d780d0")