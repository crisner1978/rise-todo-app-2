import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, { payload }) => {
      let capitalText = payload.text[0].toUpperCase() + payload.text.substring(1)
      const newTodo = {
        id: nanoid(),
        text: capitalText,
        completed: false,
      };
      state.unshift(newTodo);
    },
    editTodo: (state, { payload }) => {
      const { id, text, completed } = payload;
      const oldPost = state.find((todo) => todo.id === id);
      if (oldPost) {
        oldPost.text = text;
        oldPost.copmleted = completed;
      }
    },
    toggleComplete: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].completed = payload.completed;
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
