import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
 
 const [todos,setTodos]=useState([])

 function handleAddTodos(newTodos){
  const newTodoList=[...todos,newTodos]
  setTodos(newTodoList)
 }

 function handleDelete(index){
    const newToDoList=todos.filter((todos,todoIndex)=>{
      return todoIndex!==index
    })
    setTodos(newToDoList)
 }

 function handleEdit(index){

 }

  return (
    <main>
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <br/>
      <ToDoList handleDelete={handleDelete} todos={todos}/>
    </main>
  )
}

export default App
