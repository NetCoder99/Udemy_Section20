import { configureStore } from '@reduxjs/toolkit';

import { formStateSlice } from "./formStateSlice";

const reducerMap = {
  formState: formStateSlice.reducer,
};

const reduxStore = configureStore({reducer: reducerMap});
export default reduxStore;

