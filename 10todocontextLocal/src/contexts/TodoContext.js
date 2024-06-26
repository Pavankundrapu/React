import {useContext,createContext} from 'react'

const TodoContext = createContext({
     todos: 
     [{
       id:1,
       todo: "todo message",
       completed: false
     }], 
     addTodo: (todo) => {},
     updateTodo: (id,todo) => {},
     deletedTodo: (id) => {},
     toggleComplete: (id) => {}
});

const TodoProvider = TodoContext.Provider

const useTodo = () => {
  return(
    useContext(TodoContext)
  ) 
}

export {TodoContext,TodoProvider,useTodo};