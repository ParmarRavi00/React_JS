import './App.css';
import EmpAdd from './EmpAdd';
import EmpList from './EmpList';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import EmpView from './EmpView';
import EmpEdit from './EmpEdit';


function App() {

  return (
    <div className="App">

      <h1 className='bg-primary'>React JASON-Server CRUD</h1>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<EmpList />}></Route>
          <Route path='/employee/Add' element={<EmpAdd />}></Route>
          <Route path='/employee/view/:empId' element={<EmpView />}></Route>
          <Route path='/employee/edit/:empId' element={<EmpEdit />}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
