
import './App.css';
import Counter from './component/Counter';
// import Header from './component/Header';
// import NameList from './component/NameList';
// import PropsExample from './component/PropsExample';
import PropsExample2 from './component/PropsExample2';
import TestChangeUseState from './component/TestChangeUseState';
// import TableofSix from './component/Tableof6';

function App() {
 let arr =["deepak", "Manish", "sachu", "amit", "DeepakNishad"];
  return (
    < >
     {/* <Header/>
     <NameList/>
     <TableofSix/>
    */}
       {/* <PropsExample names={[...arr]}/> */}

 {/* <PropsExample2 name="Deepak" empid="1000" salary="100000" /> */}
<TestChangeUseState/>
<Counter/>

    </>
  );
}

export default App;
