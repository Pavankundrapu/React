import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [{id : 1, text:"hi there"}]
}

export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers: {
    addTodo : (state,action) => {
       const todo = {
        id : nanoid(),
        text: action.payload
       } 
       state.todos.push(todo)   
    },
    removeTodo : (state,action) => {
       state.todos = state.todos.filter((item) => (item.id !== action.payload.id))
    },
    updateTodo : (state,action) => {
       state.todos = state.todos.map((item) => (item.id === action.payload.id ? {...item, text:  action.payload.text}: item))
    }
  }
})

export const {addTodo,removeTodo,updateTodo}  = todoSlice.actions

export default todoSlice.reducer


//because we are using redux toolkit we can export the actions and reducer directly from the slice.

//why are we exporting todoslice.reducer?
//because we need to add it to the store.


//explain the all the above code in a detailed manner
//1. We import createSlice and nanoid from redux toolkit.
//2. We define the initial state of the todo slice.
//3. We create a todo slice using createSlice function.
//4. We define the name of the slice and the initial state.
//5. We define the reducers for the slice.
//6. We export the actions from the slice.
//7. We export the reducer from the slice.
//8. We export the slice.
//why are we exporting the actions from the slice?
