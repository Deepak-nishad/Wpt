function TableofSix() {
  let arr = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
  return (
    <>
      <table border="1">
        
          {arr.map((v) => {
            return <tr><td key={v}> {v}</td></tr>;
          })}
        
      </table>
    </>
  );
}
export default TableofSix;
