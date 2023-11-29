import logo from './logo.svg';
import './App.css';
import UseRef from './useRef';
import UseReduce from "./UseReduce";
import { useEffect, useRef, useState } from 'react';

function Counter()
{
  const [name,setName] = useState("")
  // const [count,setCount] = useState(0);

  const count = useRef(0);

  console.log(count)

  useEffect(()=>{
    // setCount (prev=> prev+1)
    count.current = count.current +1;

  });


  function handleChange(e)
  {
    setName(e.target.value)
  }

  return(<>
  
  <input onChange={handleChange}/>
  <h1>Name: {name}</h1>
    {/* <h2>Renders: {count}</h2> */}

    <h2>Renders: {count.current}</h2>
    
  </>)
}

function GetInput()
{

  const inputEle = useRef();
  const inputEle1 = useRef();

function xyz()
{
  console.log(inputEle);
  console.log(inputEle.current)
  inputEle.current.style.width ="200px";
  inputEle.current.style.height ="50px"
  inputEle.current.style.border ="4px solid blue"
  inputEle.current.style.fontSize ="40px"
  inputEle.current.style.background ="lightblue"
}

  return(
    <>

    <input type='text' ref={inputEle}/>
    <input type='text' ref={inputEle1}/>
    <button onClick={xyz}>Apply CSS</button>
    
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Counter/>
      
      <hr />
      
      <UseRef />

      <hr/>

    <GetInput/>
    <UseReduce/>
     
    </div>
  );
}

export default App;
