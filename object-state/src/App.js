import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] =useState('')
  const [toDoList,setToDoList] = useState(['Buy milk', 'Purchse the tikets','Watch semi final'])
  
  function handleToDoChange(e){
    setToDo(e.target.value)
  }
  function AddItemToList(){
    setToDoList(toDoList.push(toDo))
  }

  return (
    <div className="App">
       <p><input className='inputcss' value={toDo} onChange= {handleToDoChange}/>
     <button onClick={AddItemToList} >Add to list</button></p>
     <h3>List of tasks</h3>
     <ul>
      {
        toDoList.map(
          toDo => (
            <li>{toDo}</li>
          )
        )
      }
     </ul>
    </div>
  );
}

export default App;
