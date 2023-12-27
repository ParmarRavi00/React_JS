import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import User from './User';

const Admin = React.lazy(()=>import('./Admin'))
const User = React.lazy(()=>import ('./User'))

function App() {
  return (
    <div className="App">

     
      
      <BrowserRouter>

      <Link to="/admin">Admin</Link>
      <Link to="/user">User</Link>

      <Routes>

        <Route path='/admin' element={ 
        
        <React.Suspense fallback={<> Text Number Compo Image...Loading Admin..!</>}>
      <Admin/>
      </React.Suspense>
    }>

      </Route>

        <Route path='/user' element={
          
          <React.Suspense fallback={<> <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"/> </>}>
            <User/>
          </React.Suspense>
        }>

        </Route>

      </Routes>
      </BrowserRouter>


   
   
   {/* <User/> */}
    </div>
  );
}

export default App;
