import logo from './logo.svg';
import './App.css';
import { Users } from './Users';
import { useState } from 'react';
import Table from './Table';

function App() {

          const [query,setQuery] = useState('')

          //  console.log(query)

          console.log(Users.filter((items)=>items.name.includes(query)))


  return (
    <div>

      Search: 
      <input
      onChange={(e)=>{setQuery(e.target.value)}}
      />
     <ul>
      {Users
      .filter((items)=>items.name.toLowerCase().includes(query))
      .map((items)=>(

        <li key={items.id}>{items.name}</li>

      ))}
      
      </ul>
      

     {/* <Table/> */}
    </div>
  );
}

export default App;
