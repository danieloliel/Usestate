import { useState } from "react";
function Counter() {
    const [count, setCount]= useState(0);
    function incr(){
        setCount(
            function(oldCount){
                return oldCount +1;
            }
        )
        console.log(count)
    }
    function clear(){
        setCount(
            function(oldCount){
                oldCount =0;
                return oldCount;
            }
        )
    }
    return (
      <div>
       <h1>Counter</h1>
       <p>Counter is at {count}</p>
       <button onClick={incr}>Click to add 1 to counter.</button> <p></p>
       <button onClick={clear}>Click to reset the counter</button>
      </div>
    );
  }
  
  export default Counter;