import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] =useState('')
  
  function handleToDoChange(e){
    setToDo(e.target.value)
  }

  return (
    <div className="App">
      <input className='inputcss' value={toDo} onChange= {handleToDoChange}/>
      <p><button className='button-29'>Add to list</button></p>
    </div>
  );
}

export default App;
