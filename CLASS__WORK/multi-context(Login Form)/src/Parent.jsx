import React, { createContext, useState } from 'react'
import Child from './Child';
export const box = createContext();

function Parent() {
    const [name, setname] = useState("Mayur");
  return (
    <div>
          <h1>
              This is Parent Component :-   </h1>
          <box.Provider value={name}>
          <Child />
         </box.Provider>
    </div>
  )
}

export default Parent;