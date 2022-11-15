function Company(props) {

    const {CompanyName, NumOfEmployees, Address} = props


    return (
      <div >
          <h2>The company is called {CompanyName}, and employs {NumOfEmployees} workers.</h2>
          <p><h3>The company is located in {Address}.</h3></p>
      </div>
    );
  }
  
  export default Company;
  