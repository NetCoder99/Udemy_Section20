import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { FormStatusDef } from '../models/FormStatusDef';

// ------------------------------------------------------------------------------------------
export interface FormStatePayload
  { type: string, 
    payload: {
      item: FormStatusDef
    } 
  };

const initFormState: FormStatusDef = {
  hasError: false,
  formMsg: ''
};

export const formStateSlice = createSlice({
  name: 'formStateSlice',
  initialState: initFormState,
  reducers: {
    setFormState(state, action: FormStatePayload) {
        state.hasError = action.payload.item.hasError;
        state.formMsg  = action.payload.item.formMsg;
        state.msgClass = action.payload.item.msgClass;
    },
    resetFormState(state) {
        state.hasError=false;
        state.formMsg="";
        state.msgClass="";
    },
  }
});

export const formStateActions    = formStateSlice.actions;