import { useState } from "react";

// function Counter(){
// let value=0;
// let [count, setCount]= useState(0);

// return (
//     <>
//     <h1>counter value :{count}</h1>
//     <button type="button" onClick={
//         ()=>{
//             setCount(count++);
//         }
//     }>Increment</button>

//     <button type="button" onClick={
//         ()=>{
//             setCount(count--);
//         }
//     }>Decrement</button>
//     </>
// )

// }

function Counter(){

const [count, setCount]= useState(0);

return (
    <>
    <h1>counter value :{count}</h1>
    <button type="button" onClick={
        ()=>{
            setCount(count+1);
        }
    }>Increment</button>

    <button type="button" onClick={
        ()=>{
            setCount(count-1);
        }
    }>Decrement</button>
    </>
)

}
export default Counter