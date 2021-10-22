import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
//import { errorSlice } from './errorSlice';
import { formSlice } from "./formSlice";

const reducerMap = {
  formState: formSlice.reducer,
  apiSlice:  apiSlice.reducer,
};

const reduxStore = configureStore({reducer: reducerMap});
export default reduxStore;

