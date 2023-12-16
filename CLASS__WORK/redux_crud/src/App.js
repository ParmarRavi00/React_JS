import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';


function App() {
  return (
    <div className="App">

      <h1>React Redux CRUD</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
