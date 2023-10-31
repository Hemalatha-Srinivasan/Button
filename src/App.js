import React,{useState} from 'react'

function App() {
  const[counts,setCounts]=useState(0);
  const[counts1,setCounts1]=useState(0);
  function myfunc1(){
    setCounts(counts+1)
  }
  function myfunc2(){
    setCounts(counts-1);
  }
  function myfunc3(){
    setCounts1(counts1+1);
  }
  return(
    <div>
    <button onClick={myfunc1}>Increase</button>
    <span>{counts}</span>
    <button onClick={myfunc2}>Decrease</button>
    <button onMouseOver={myfunc3}>Hover {counts1}</button>
    </div>
  );
}
export default App



