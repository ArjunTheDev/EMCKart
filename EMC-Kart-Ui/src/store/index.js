import userReducer from './userStore';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });
  
  export default store;