import './App.css';

import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1); 
function handleDelta(event){
  console.log(event)
  setDelta(Number(event.target.value))
}   
  return (
    <div className="App">
     <h1 >UseState</h1>
     <p><input type="number" value = {delta} onChange= {handleDelta}/></p>
      <p></p>
     <Counter delta= {delta} />
     <Counter delta= {delta} />
    </div>
  );
}

export default App;
