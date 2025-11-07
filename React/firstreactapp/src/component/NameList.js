function NameList(){
 let arr =["deepak", "Manish", "sachu", "amit", "DeepakNishad"];

return(

    <>
    <h1>List using Array with map function</h1>

    <ul>
      {
        arr.map((v)=>{
       return <li key={v}>{v}</li>
        })

    // arr.map(v=> <li key={v}>{v}</li>)
      }
    </ul>
    </>
)


}
export default NameList