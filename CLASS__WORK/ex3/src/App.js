import logo from './logo.svg';
import './App.css';
import Counter from './StateEx1';
import MyInput from './StateEx2';
import MyLikes from "./StateEx3";
import FormData from "./StateEx4";
import Counter1 from "./StateEx5";
import MultiState from "./StateEx6";
import NestedObj from './StateEx7';

function App() {
  return (
   <>
    <Counter1/>
    <br/>
    <Counter/>
    <br/>
    <MultiState/>
    <br/>
    <MyInput/>
    <br/>
    <MyLikes/>
    <br/>
    <FormData/>
    <br/>
    <NestedObj />
      
   </>
  );
}

export default App;