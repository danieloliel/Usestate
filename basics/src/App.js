import './App.css';
import Person from './Person';
function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <p>We are learning react!</p>
        <h1>Person component</h1>
        <Person personName = "Daniel" personLocation = "Har Gilo"/>
        <Person personName = "Lior" personLocation = "ma'ale adumim"/>
    </div>
  );
}

export default App;


