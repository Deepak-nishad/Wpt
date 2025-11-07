function PropsExample2(ps) {
  let empid = ps.empid;
  let name = ps.name;
  let salary = ps.salary;
  return (
    <>
      <table border="1">
        <tr><th>EmpId</th><th>Name</th><th>Salary</th></tr>
        <tr>
          
            <td>{ empid }</td><td>{ name } </td><td>{ salary }</td>
           
           
        </tr>
      </table>
    </>
  );
}

export default PropsExample2;
