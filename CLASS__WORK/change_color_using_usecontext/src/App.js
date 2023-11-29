import React, { createContext, useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangeColor = createContext();

function App() {

  const [Color, SetColor] = useState("text-dark");
  
  return (
    <>
      <ChangeColor.Provider value={{Color, SetColor}}>
        <MainDiv/>
      </ChangeColor.Provider>
    </>
  )
}

function MainDiv() {

  const UseColor = useContext(ChangeColor);

  console.log(UseColor.Color);

  function TextColorChange() {
    UseColor.SetColor((Preve) => (
      Preve == "text-dark" ? "text-primary" : "text-dark"
    ));
  }
  return (
    <>
      <div className={`${UseColor.Color}`}>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      </div>

      <button className='btn btn-primary' onClick={TextColorChange}>Change Color</button>
    </>
  )
}

export default App;