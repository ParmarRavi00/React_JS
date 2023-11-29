import React from 'react';
import { useState } from 'react';

function SingleComponantTodo() {
  return (
    <>
      <TaskList/> 
    </>
  )
}

const TaskList = () => {

  const InitialValue = [
    {id:1, title:"Mango"},
    {id:2, title:"Banan"},
    {id:3, title:"Apple"}
  ]

  const [title, SetTitle] = useState("");

  const [todos, SetTodos] = useState(InitialValue);

  const AddTodo = (AddTitle) => {
    if (title.trim() == "") {
      alert("Please Enter Some Text : ")
    }
    else {
      SetTodos([
        ...todos,
        {id:todos.length+1, title:AddTitle}
      ])
      SetTitle("");
    }
  }

  const DeleteTodo = (id) => {
    SetTodos(
      todos.filter((todosVal) => {
        return todosVal.id !== id;
      })
    )
  }

  const [IsEditing, SetIsEditing] = useState(null);
  const [EditText, SetEditText] = useState("");

  const EditTodo = (EditId, EditTitle) => {
    SetIsEditing(EditId);
    SetEditText(EditTitle);
  }

  const SaveTodo = (SaveId) => {
    SetTodos(
      todos.map((todosVal) => {
        if (SaveId == todosVal.id) {
          return {...todosVal, title:EditText}
        }
        else {
          return {...todosVal}
        }
      })
    )
    SetIsEditing();
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={title} onChange={(e)=>SetTitle(e.target.value)}/>
      <button onClick={()=>AddTodo(title)}>Add</button>

      {
        todos.map((val) => (
          <ul>
            <li>
              {
                (IsEditing == val.id) ? 
                  <>
                    <input type="text" value={EditText} onChange={(e)=>SetEditText(e.target.value)}/>
                    <button onClick={()=>SaveTodo(val.id)}>Save</button>
                  </>
                  :
                  <>
                    {val.title} <button onClick={()=>EditTodo(val.id, val.title)}>Edit</button> <button onClick={()=>DeleteTodo(val.id)}>Delete</button>
                  </>
              }
            </li>
          </ul>
        ))
      }
    </>
  )
}

export default SingleComponantTodo;