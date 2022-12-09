import { useState } from 'react';
import Massage from './massage';
import './App.css';



function App() {

  const[passwordStrength, setPasswordStrength] = useState(0);
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className="App">
      <h1>Welcome</h1>
      <p><h3>Please enter password:</h3></p>
      <p><input className='inputcss' type="text" id="message" name="message" onChange={handleChange} />  
      <button className='button-29'>Submit</button></p>
      <p><h3> {passwordStrength} password </h3></p>
      <p><h2>Message: {message}</h2></p>
      <Massage setPasswordStrength={setPasswordStrength} />
    </div>
  );
}


export default App;

