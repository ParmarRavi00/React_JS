import React, { createContext } from 'react';
import MainCompo from './MainCompo';

export const userdata = createContext();



function UseContextEX1() {
const data = [
    {name:"Shubham",id:1},
    {name:"Abhinav",id:2},
    {name:"Kiran",id:3}
]

  return (

    <userdata.Provider value={data}>
    <div>
      
        <MainCompo/>
    </div>

    </userdata.Provider>
  )
}

export default UseContextEX1;
