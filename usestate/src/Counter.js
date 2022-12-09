import { useState, useEffect } from "react";
function Counter(props) {
    const {delta, maxNum, getReset, needToReset,getCounter} = props;
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
              let output = oldCount + delta;
                 if((output)> maxNum){
                  getCounter(0)
                  return 0 ; }
                 getCounter(output)
                 return output;        
        }
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