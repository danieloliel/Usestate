import { useState,useEffect } from 'react';
import Massage from './massage';
import './App.css';



function App() {

  
  const [input, setInput] = useState(0);
  const [strengthBole, setStrengthBole] = useState(true);

  function handleChange(e){
    setInput(e.target.value)
  }
  useEffect(()=>{
    if(input.length >2){
      setStrengthBole(false)
    }
    else{setStrengthBole(true);}
    },[setStrengthBole,input])
 

  return (
    <div className="App">
      <h1>Welcome</h1>
      <p><h3>Please enter password:</h3></p>
      <p><input className='inputcss'  onChange={handleChange} />
      <button  disabled={strengthBole}>Submit</button></p>
      
      
      <Massage input={input} />
      

    </div>
  );
}


export default App;
