import { useState } from "react"

function Showform(){

    const [text, setText]=useState("");
    const[atext, setTexta]=useState("");

return(
    <>
   
<div>
    <form>
        <label>Enter the name: </label>
        <input type="text" name="ename" placeholder="Enter Name" onChange={(e)=>{setText(e.target.value)}} ></input>
        <br></br>
        <label>Enter Password : </label>
        <input type="password" placeholder="Enter password"></input>
             <br></br>
        <button type="button" className="btn btn-primary p-1 m-1" onClick={()=>{setTexta(text)}}>Submit</button>
        <button type="button" className="btn btn-primary ">Clear</button>

        <p>{text}</p>
        <h1>Welcome :{atext}</h1>
    </form>
</div>


    </>
)
}
export default Showform