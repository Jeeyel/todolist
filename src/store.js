import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
  // Add middleware and other store enhancers if needed
});

export default store;
