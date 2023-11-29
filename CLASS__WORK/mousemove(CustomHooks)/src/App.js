import { useState } from 'react';
import './App.css';
import UseWindowListener from './UseWindowListener';

function App() {

  const [Pos, SetPos] = useState({ x: 0, y: 0 });

  UseWindowListener("mousemove", (e) => {
    SetPos({
      x: e.clientX,
      y:e.clientY
    })
  })
  return (
    <>
      
      <div style=
        {{
        height: "20px", width: "20px", background: "black",
        borderRadius:"50%",
      transform:`translate(${Pos.x}px,${Pos.y}px)`}}></div>
    
    </>
  );
}

export default App;
