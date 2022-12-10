import { useState } from "react"

function Massage(props){

  const[input] = props  
  const[passwordStrangh,setPasswordStrangh] = useState(0);  

  function handleStrangh(input){
    if(input.length<=2){
      setPasswordStrangh("Weak")}
    else if(3<=input.length<=6){
      setPasswordStrangh("Medium")}
    else{setPasswordStrangh("Strong")}}  
    
    return( 
    <div>
    <h3>Password {passwordStrangh}</h3>

         
        
   </div>
 );



}
export default Massage;