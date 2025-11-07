import { useState } from "react"

function TestChangeUseState(){
const[text, setText]=useState("yellow")

return(
    <>
    <p style={{color:text, textAlign:"center"}}>Helloo</p>
    <button type="button" onClick={()=>{
        setText("red");
    }}>Change text</button>
    </>
)

}
export default TestChangeUseState