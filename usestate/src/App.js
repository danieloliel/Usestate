import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1); 
  const [maxNum, setMaxNum]= useState(10);
  const [reset, setReset] = useState(false);
function handleDelta(event){
  setDelta(Number(event.target.value));
  
}
function handleMaxNum(event){
  setMaxNum(Number(event.target.value));
}

function getReset(data){
   console.log(data);
   setReset(data);
}



  return (
    <div className="App">
     <h1 >UseState</h1>
     <p><h3>Enter counter jumper:</h3></p>
     <p><input className='inputcss' type="number" value = {delta} onChange= {handleDelta}/></p>
     <p><h3>Enter maximum number:</h3></p>
     <p><input className='inputcss' type="number" value = {maxNum} onChange= {handleMaxNum}/></p>
      
     <Counter delta= {delta} maxNum= {maxNum} getReset= {getReset} needToReset= {reset}/>
     <Counter delta= {delta} maxNum= {maxNum} getReset= {getReset} needToReset= {reset}/>
    </div>
  );
}

export default App;
