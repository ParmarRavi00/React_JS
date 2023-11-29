import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
  
    </div>
  )
}

export default App;