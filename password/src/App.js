import { useState } from 'react';
import Massage from './massage';
import './App.css';



function App() {

  
  const [input, setInput] = useState("");
  const [strengthBole, setStrengthBole] = useState(true);

  function handleChange(e){
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <p><h3>Please enter password:</h3></p>
      <p><input className='inputcss' type="password" onChange={handleChange} />
      <button  disabled={strengthBole}>Submit</button></p>
      
      
      <Massage input={input} setStrengthBole={setStrengthBole}/>
      

    </div>
  );
}


export default App;
