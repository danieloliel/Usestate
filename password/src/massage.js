import { useState } from "react";

function Massage(props) {
  
  const {input} = props;
  const[Strange,setStrange] = useState();

  function chackStrange(){
    if(input.length <=2){
      setStrange("Short password")
    }
    else if(input.length <=6){
      setStrange("Medium password")
    }
    else{setStrange("Strong password")}
  }
  return (
    <div>
    <h3><button className="button-29" onClick={chackStrange} >click</button> </h3>
    <p>{Strange}</p>
    </div>
  );
}
export default Massage;