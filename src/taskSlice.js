import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    },
  },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
