import './App.css';
import { useState } from 'react';

function Form()
{
  const [name,setName] = useState('Shubham');

  return(<>
  
    <input 
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
   
    />
    <h1>{name}</h1>

  </>)
}

function App() {

  const[version,setVersion] = useState(0);

  function handleReset()
  {
    setVersion(version+1)
  }

  return (
    <div className="App">

      <button onClick={handleReset}>RESET</button>
     <Form key={version}/>
    </div>
  );
}

export default App;
