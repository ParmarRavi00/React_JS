import React, { useContext } from 'react'
import { box } from './Parent'

function Child({ }) {
    const recieveData = useContext(box);
console.log(recieveData);
  return (
    <div>
          <h1>
          This is Child Componentr :-
          </h1>
          <h2>
              data from child : - {recieveData}
          </h2>
    </div>
  )
}

export default Child
