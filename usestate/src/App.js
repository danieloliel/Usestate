import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1); 
  const [maxNum, setMaxNum]= useState(10);
  const [reset, setReset] = useState(false);
  const [maxVal, setMaxVal] = useState(0); 
  const [maxValLogicChange, setMaxValLogicChange] = useState(false);
  function handleDelta(event){
  setDelta(Number(event.target.value));
   }
  
  function handleMaxNum(event){
  setMaxNum(Number(event.target.value));
    }

  function getReset(data){
   console.log(data);
   setReset(data);   ;
    }

  function getMaxVal(data){
  console.log(data);
  setMaxValLogicChange(data);
    }

  function UpdateMaxVal(val){
  console.log(val);
  setMaxVal(val);
   }

  return (
    <div className="App">
     <h1 >UseState</h1>
     <p><h3>Enter counter jumper:</h3></p>
     <p><input className='inputcss' type="number" value = {delta} onChange= {handleDelta}/></p>
     <p><h3>Enter maximum number:</h3></p>
     <p><input className='inputcss' type="number" value = {maxNum} onChange= {handleMaxNum}/></p>
     <p><h3>Maximum value: {maxVal} </h3></p>  
     <Counter delta= {delta} maxNum= {maxNum} getReset= {getReset} needToReset= {reset} 
       getMaxVal={getMaxVal} needMaxValue= {maxValLogicChange} UpdateMaxVal={UpdateMaxVal} maxVal= {maxVal}/>
     
     <Counter delta= {delta} maxNum= {maxNum} getReset= {getReset} needToReset= {reset}
     getMaxVal={getMaxVal} needMaxValue= {maxValLogicChange} UpdateMaxVal={UpdateMaxVal} maxVal= {maxVal}/>
    </div>
     );
}

export default App;
