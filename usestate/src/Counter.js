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
       <p><div class="button-29">{count}</div></p>
       <button class="button-29"  onClick={incr}>Click to add 1 to counter.</button> <p></p>
       <button class="button-29"  onClick={clear}>Click to reset the counter</button>
      </div>
    );
  }
  
  export default Counter;