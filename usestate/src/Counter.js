import { useState, useEffect } from "react";
function Counter(props) {
    const {delta, maxNum, getReset, needToReset} = props;
    const {UpdateMaxVal} = props;
    const [count, setCount]= useState(0);
 
    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset, getReset])



    function incr(){
        setCount(
            function(oldCount){ 
                UpdateMaxVal(oldCount+delta);
                if((oldCount +delta)<= maxNum){
                 return oldCount +delta;
                 }
                else{ return 0}
        },
        )
    }
    
    function reset(){
        getReset(true)
        } 

  
 
   
    return (
      <div>
       <h1>Counter</h1>
       <p><div class="button-29">{count}</div></p>
       <button class="button-29"  onClick= {incr}>  Click to add {delta} to counter.</button> <p></p>
       <button class="button-29"  onClick={reset}>Reset counter</button>
      </div>
    );
  }
  export default Counter;