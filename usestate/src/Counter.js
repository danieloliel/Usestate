import { useState, useEffect } from "react";
function Counter(props) {
    const {delta, maxNum, getReset, needToReset} = props;
    const {getMaxVal,needMaxValue,maxVal,UpdateMaxVal} = props;
    const [count, setCount]= useState(0);
 
    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset, getReset])

    useEffect(()=>{
      if(needMaxValue){
        UpdateMaxVal(delta+maxVal)
        getMaxVal(false)
      }
    },[needMaxValue,getMaxVal,UpdateMaxVal,delta,maxVal])

    function incr(){
        setCount(
            function(oldCount){
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
     function getMaxVale(){   
          getMaxVal(true);
       }
      
    function together(){
      incr();
      getMaxVale();
    }
   
    return (
      <div>
       <h1>Counter</h1>
       <p><div class="button-29">{count}</div></p>
       <button class="button-29"  onClick= {together}>  Click to add {delta} to counter.</button> <p></p>
       <button class="button-29"  onClick={reset}>Reset counter</button>
      </div>
    );
  }
  export default Counter;