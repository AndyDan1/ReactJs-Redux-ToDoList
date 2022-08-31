import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    completedTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
})

export const {addTodo, completedTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;