import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/Todoform';
import TodoItem from './components/Todoitem';

function App() {
  
   const [todos,setTodos] = useState([]);

   const addTodo = (todo) => {
    setTodos((prev) => [{...todo},...prev])
   }

   const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
   }
   
   const deletedTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
   } 

   const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo)))
   }


   //for data retrevtion form local storage when we start our project
   useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0)
        {
            setTodos(todos);
        }
   }
   ,[])
   
   //when there is a change in the todos we update the local storage
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])




  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deletedTodo,toggleComplete}}>
         <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div className="w-full" key={todo.id}>
                                <TodoItem todo={todo}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
