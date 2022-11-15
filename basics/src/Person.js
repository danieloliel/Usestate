function Person(props) {

    const {personName, personLocation} = props


    return (
      <div >
          <h2>My name is {personName} </h2>
          <p>I live in {personLocation}</p>
      </div>
    );
  }
  
  export default Person;
  