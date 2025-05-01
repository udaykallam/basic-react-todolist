import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
 
 const [todos,setTodos]=useState([])

 function handleAddTodos(newTodos){
  const newTodoList=[...todos,newTodos]
  setTodos(newTodoList)
 }

  return (
    <main>
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <br/>
      <ToDoList todos={todos}/>
    </main>
  )
}

export default App
