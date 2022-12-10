
function Massage(props) {
  
  const {input} = props;

  
  return (
    <div>
     <h3>Password {input.length > 6 ? <p>Password is ok</p> : <p>Too short</p>}</h3>
   
    </div>
  );
}
export default Massage;