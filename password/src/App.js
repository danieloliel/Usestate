import { useState } from 'react';
import Massage from './massage';
import './App.css';



function App() {

  
  const [input, setInput] = useState(0);

  function handleChange(e){
    setInput(e.target.value)
  }

 

  return (
    <div className="App">
      <h1>Welcome</h1>
      <p><h3>Please enter password:</h3></p>
      <p><input className='inputcss'  onChange={handleChange} />
      <button disabled >  Submit</button></p>
      
      
      <Massage input={input} />
      

    </div>
  );
}


export default App;
