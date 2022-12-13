import { useState,useEffect } from "react";

function Massage(props) {
  
  const {input,setStrengthBole} = props;
  const[Strange,setStrange] = useState("Weak password");

  useEffect(()=>{
    if(input.length <=2){
      setStrange("Weak password")
      setStrengthBole(true)
    }
    else if(input.length >2 && input.length <=6){
      setStrange("Medium password")
      setStrengthBole(false)
    }
    else{setStrange("Strong password")
    setStrengthBole(false)
  }
  },[setStrange,setStrengthBole,input])



  return (
    <div>
    <h3>{Strange}</h3>

  
    </div>
  );
}
export default Massage;