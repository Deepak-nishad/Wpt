import { useReducer } from "react";

export default function EmpForm () {
    //init, reducer - argument for useReducer function
    //original state
    const init = {
        empid: 0,
        ename: "",
        salary: 0,
        deptno: 0
    }
    //how to modify the state, used as a callback function - dispatch will call
    const reducer = (state,action) => {
        switch(action.type) {
            case 'update':
                return {...state, [action.fld]:action.value};
                //return { [action.fld]: action.value}
            case 'reset':
                return init;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //make a call server API
        console.log(JSON.stringify(emp))
    }


    const[emp, dispatch] = useReducer(reducer, init);
     return (
        <div className="container">
            <h1> Emp Form </h1>
            <form>
                <div>
                   <label className="form-label" for="empid">Enter empid :</label>
                   <input type="number" name="empid" id="empid"
                   className="form-control" value={emp.empid}
                   onChange={(e)=>{dispatch({type:'update',fld:"empid",value:e.target.value})}}  />
                
                </div>
                <div>
                    <label className="form-label" for="ename">Enter ename :</label>
                    <input type="text" name="empid" id="ename"
                   className="form-control"value={emp.ename}
                   onChange={(e)=>{dispatch({type:'update',fld:"ename",value:e.target.value})}}  />
                </div>
                <div>
                    <label className="form-label" for="salary">Enter salary :</label>
                    <input type="number" name="empid" id="salary"
                   className="form-control" value={emp.salary}
                   onChange={(e)=>{dispatch({type:'update',fld:"salary",value:e.target.value})}}  />
                </div>
                <div>
                    <label className="form-label" for="deptno">Enter deptno :</label>
                    <input type="number" name="empid" id="deptno"
                   className="form-control" value={emp.deptno}
                   onChange={(e)=>{dispatch({type:'update',fld:"deptno",value:e.target.value})}}  />
                </div>
                <input type="submit" value="Create Record" className="btn btn-primary" 
                  onClick={handleSubmit} /> 
                <input type="reset" value="Clear" className="btn btn-primary"
                 onClick={()=>{dispatch({type:"reset"})}} />
            </form>
            <p> {JSON.stringify(emp)} </p>
        </div>
    )


}