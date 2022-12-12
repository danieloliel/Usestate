import { useState,useEffect } from "react";

function Massage(props) {
  
  const {input} = props;
  const[Strange,setStrange] = useState("Short password");

  useEffect(()=>{
    if(input.length <=2){
      setStrange("Short password")
    }
    else if(input.length <=6){
      setStrange("Medium password")
    }
    else if(input.length >7){setStrange("Strong password")}
  },[setStrange,input])



  return (
    <div>
    <h3>{Strange}</h3>

  
    </div>
  );
}
export default Massage;