import React, { useState } from 'react'

function RegisterForm() {

    const [show, setShow]=useState(true);

  return (
    <>
    <form  style={{display: show?"block":"none"}} >

 <label htmlFor='email'>Email : </label><br></br>
  <input type="email" name="email"></input><br></br>
   
    <label htmlFor='pass'>Password : </label><br></br>
  <input type="password" name="pass"></input><br></br>

   <label htmlFor='gender'>Male : </label><br></br>
  <input type="radio" name="gender" value="male"></input><br></br>
   <label>female: </label><br></br>
  <input type="radio" name="gender" value="female"></input><br></br>

   <label htmlFor='city'>City:</label><br></br>
    <select id="city" name="city" required>
      <option value="">Select City</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Pune">Pune</option>
      <option value="Delhi">Delhi</option>
      <option value="Bangalore">Bangalore</option>
    </select>
    <br></br>
    
 <button type='button' onClick={()=>{}}>Submit</button>
   
      <label htmlFor='city'>I agree in the form</label><br></br>
       <input type="checkbox" name='checkbox' onClick={()=>{setShow(!show)}}></input>


    </form>
    </>
  );
}
export default RegisterForm;
