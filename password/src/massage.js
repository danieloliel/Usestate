import { useState } from "react";

function Massage(props) {
  
  const {input} = props;
  const[Strange,setStrange] = useState(0);

  function chackStrange(){
    if(input.length <=2){
      setStrange("Short")
    }
    else if(input.length <=6){
      setStrange("Medium")
    }
    else{setStrange("Strong")}
  }
  return (
    <div>
    <h3><button className="button-29" onClick={chackStrange} >click</button> </h3>
    <p>Password {Strange}</p>
    </div>
  );
}
export default Massage;