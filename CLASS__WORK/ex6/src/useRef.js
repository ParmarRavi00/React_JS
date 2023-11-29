import { useEffect, useRef, useState } from 'react';

function UseRef() {
  return (
    <>
      <Details1 />

      <Details2/>
    </>
  );
}

function Details1() {

  const [Data, SetData] = useState("");

  const [Count, SetCount] = useState(0)

  useEffect(() => {
    SetCount(Count + 1);
  },[Data])

  return (
    <>
      <input
        type='text'
        value={Data}
        onChange={(a) => { SetData(a.target.value) }}
      />

      <p>The number of times render: {Count}</p>

      <br/>
    </>
  )
}

function Details2() {

  const [Name, SetName] = useState("");

  function handleChange(e) {
    SetName(e.target.value)
  }

  const Count = useRef(0);
  console.log(Count);

  useEffect(() => {
    Count.current = Count.current + 1;
  })

  return (
    <>
      
      <input
        type='text'
        value={Name}
        onChange={handleChange}
      />

      <p>The number of times render: { Count.current}</p>
      

    
    </>
  )
}

export default UseRef;