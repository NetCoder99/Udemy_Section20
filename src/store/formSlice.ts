import { createSlice } from "@reduxjs/toolkit";
import { sortErrors } from "../functions/sortFunctions";

export interface fieldErr {
  fieldSeq: number;
  fieldName: string;
  errMessage: string;
}
const formErrors = { errorFields: new Array<fieldErr>() };

export const formSlice = createSlice({
  name: "formSlice",
  initialState: formErrors,
  reducers: {
    resetFormState(state) {
      state.errorFields = new Array<fieldErr>();
    },
    addErrorField(state, action: { payload: { fieldName: string; errMessage: string, fieldSeq: number } }    ) {
      console.log('addErrorField:' + action.payload.fieldName);
      let index = state.errorFields.findIndex(item => item.fieldName === action.payload.fieldName);
      if (index < 0) {
        state.errorFields.push(action.payload);
        sortErrors(state.errorFields, true);
      }
    },
    delErrorField(state, action: { payload: { fieldName: string} } ) {
      console.log('delErrorField:' + action.payload.fieldName);
      let index = state.errorFields.findIndex(item => item.fieldName === action.payload.fieldName);
      if (index > -1) {state.errorFields.splice(index, 1)};
    },
  },
});

export const formActions = formSlice.actions;
