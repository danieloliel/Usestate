import { useState } from "react";
function Counter() {
    const [count, setCount]= useState(0);
    const [delta, setDelta] = useState(1);        
    function incr(){
        
        setCount(
            function(oldCount){
                 return oldCount +delta;
            }
        )   
    }
    function reset(){
        setCount(0) 
    }
    function handleDelta(event){
        console.log(event)
        setDelta(Number(event.target.value))
    }   
    
    return (
      <div>
       <h1>Counter</h1>
       <p><input type="number" value = {delta} onChange= {handleDelta}/></p>
       <p><div class="button-29">{count}</div></p>
       <button class="button-29"  onClick={incr}>Click to add {delta} to counter.</button> <p></p>
       <button class="button-29"  onClick={reset}>Reset counter</button>
      </div>
    );
  }
  
  export default Counter;