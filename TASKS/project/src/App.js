import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Routing from './Routing';
import Footer from './Footer';
import './css/style.css';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
