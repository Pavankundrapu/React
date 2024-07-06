import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo,updateTodo} from '../features/todo/todoSlice'

function Todo() {

  const todos = useSelector(state => state.todos)
  //here we get state as a callback in useselector function and we take the info form the store
  const dispatch = useDispatch()
  
  return (
    <>
      <div>Todo</div>
      {todos.map(todo => (
          <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))} >X</button>             
          </li>
      ))}
    </> 
  )
}

export default Todo

//while calling any function if we are going to pass any parameter it should be called under callback.

