import './App.css';

import Company from './Company';
function App() {
  return (
    <div className="App">
        <h1>Hello and welcome</h1>
        <p>We are learning react!</p>
        <h1>Company component</h1>
        <Company CompanyName = "BMI" NumOfEmployees = "120" Address= "Jerusalem"/> <br></br>
        <Company CompanyName = "Albit" NumOfEmployees = "238" Address= "Tel Aviv"/> <br></br>
        <Company CompanyName = "Ra'am" NumOfEmployees = "40" Address= "Netanya"/>
    </div>
  );
}

export default App;
