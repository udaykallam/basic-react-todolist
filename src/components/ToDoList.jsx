import React from 'react'

export default function ToDoList() {
 let todos=[
    'Go to the GYM',
    'Have breakfast',
    'Go to college'
 ]
 return (
    <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return (
                <li className='todoItem' key={todoIndex}>{todo}</li>
            )
        })}
    </ul>
 )
}
