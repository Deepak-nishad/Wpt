import { useReducer, useState } from "react"

function EmpRegisteration(){

      const [msg,setMsg] = useState("")
      const[data, setData]=useState("");
    const init ={
    empid:0,
    ename:"",
    job:"",
    mgrid:0,
    sal:0,
    comm:0,
    deptno:0
}



const  handlesubmit= (e)=>{
e.preventDefault();

const reqInfo={
    method : "post",
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify(emp)
}

 fetch( "http://localhost:9000/registerindb", reqInfo)
        .then(resp => resp.text())
        .then(data =>{ setMsg(data.toString());
            console.log(data)
        })
        .catch(err => setMsg("failed to fetch : "))


}

const reducer= (state, action)=>{
    switch(action.type){
        case 'update':
            return {...state, [action.fld]:action.value};
            case 'reset':
                return init;
                default:
                    return state;
    }
}

const [emp, dispatch]=useReducer(reducer, init);
return(
    <>
    
<form>
    <div>
        <label htmlFor="empid">Enter Employee ID:</label>
        <input type="number" name="empid" value={emp.empid}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"empid",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>

    <div>
        <label htmlFor="ename">Enter name:</label>
        <input type="text" name="ename" value={emp.ename}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"ename",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>

   <div>
        <label htmlFor="job">Enter job </label>
        <input type="text" name="job" value={emp.job}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"job",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>

     <div>
        <label htmlFor="mgrid">Enter Emgr id:</label>
        <input type="number" name="mgrid" value={emp.mgrid}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"mgrid",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>
    <div>
        <label htmlFor="sal">Enter sal:</label>
        <input type="number" name="sal" value={emp.sal}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"sal",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>
    <div>
        <label htmlFor="comm">Enter comm:</label>
        <input type="number" name="comm" value={emp.comm}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"comm",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>
    <div>
        <label htmlFor="deptno">Enter deptno:</label>
        <input type="number" name="deptno" value={emp.deptno}
        onChange={(e)=>{
            dispatch({
                type:'update',
                fld:"deptno",
                value:e.target.value,
            
            })
             setData(e.target.value);
              console.log( e.target.value);

        }}
        
        ></input>
    </div>
    <input type="submit"  onClick={handlesubmit}></input>

</form>

<p>{data}</p>
<p>{msg }</p>
    </>
)
}
export default EmpRegisteration