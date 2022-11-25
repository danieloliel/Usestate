import { useState } from "react";
function Counter(props) {
    const {delta} = props;
    const {maxNum} = props;
    const [count, setCount]= useState(0);
 
    function incr(){
        
        setCount(
            function(oldCount){
                if((oldCount +delta)< maxNum){
                 return oldCount +delta;
            }
            else{ return 0}
        }
        )   
    }
    function reset(){
        setCount(0) 
    }  

    
    return (
      <div>
       <h1>Counter</h1>
       
       <p><div class="button-29">{count}</div></p>
       <button class="button-29"  onClick={incr}>Click to add {delta} to counter.</button> <p></p>
       <button class="button-29"  onClick={reset}>Reset counter</button>
      </div>
    );
  }
  
  export default Counter;