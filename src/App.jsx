import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  let todos=[
    'Go to the GYM',
    'Have breakfast',
    'Go to college'
 ]
  return (
    <main>
      <ToDoInput />
      <br/>
      <ToDoList todos={todos}/>
    </main>
  )
}

export default App
