import './App.css';
import SingleComponantTodo from './SingleComponantTodo';
import TodoListUsingUseReducer from './TodoListUsingUseReducer';
import NavMenu from './NavMenu';
import Model from './Model';
import Togglecolor from './Togglecolor';

function App() {
  return (
    <>
      <SingleComponantTodo />
      <br/>
      <TodoListUsingUseReducer />
      <br/>
      <NavMenu />
      <br />
      <Togglecolor/>
      <br />
      <Model />
      
      
    </>
  );
}

export default App;
