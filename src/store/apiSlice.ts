import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------------------------
const initApiStatus ={
  isLoading: false,
  hasLoaded: false,
  hasError: false,
  errMsg: '',
};

export const apiSlice = createSlice({
  name: 'formStateSlice',
  initialState: initApiStatus,
  reducers: {
    reset(state) {
        state.isLoading = false;
        state.hasLoaded = false;
        state.hasError = false;
        state.errMsg = '';
    },
    setIsLoading(state) {
        state.isLoading = true;
        state.hasLoaded = false;
        state.hasError = false;
        state.errMsg = '';
    },
    setHasLoaded(state) {
        state.isLoading = false;
        state.hasLoaded = true;
        state.hasError = false;
        state.errMsg = '';
    },
    setHasError(state, action: {payload: {errMsg: string}})
    {
        state.isLoading = false;
        state.hasLoaded = true;
        state.hasError = false;
        state.errMsg = '';
    },
  }
});

export const apiActions  = apiSlice.actions;