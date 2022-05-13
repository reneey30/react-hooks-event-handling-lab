// Code Keypad Component Here
function Keypad(){
    return (
      <input 
        onChange={ () => console.log(`Entering password...`)} 
        style = {{ width : "200px", height : "30px"}} 
        placeholder = "Password"
        type= "password"
      />
    )
  }
  
  export default Keypad;