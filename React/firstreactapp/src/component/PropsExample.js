function PropsExample(ps) {
  console.log({ ps });

  let arrdata = ps.names;
  return (
    <>
      <ul>
        {arrdata.map((v) => {
        return <li>{v}</li>
      })}
      </ul>
    </>
  );
}
export default PropsExample;
