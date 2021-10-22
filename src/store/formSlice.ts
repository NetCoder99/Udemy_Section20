import { createSlice } from "@reduxjs/toolkit";
import { sortErrors } from "../functions/sortFunctions";

export interface fieldItem {
  fieldSeq: number;
  fieldName: string;
  fieldValue: string;
  errMessage: string;
}

export const formSlice = createSlice({
  name: "formSlice",
  initialState: { fieldProps: new Array<fieldItem>() },
  reducers: {
    resetFormState(state) {
      state.fieldProps = new Array<fieldItem>();
    },
    setFieldValue(state, action: { payload: { fieldName: string; fieldValue: string, fieldSeq: number } }    ) {
      //console.log('setValueField:' + action.payload.fieldName);
      let index = state.fieldProps.findIndex(item => item.fieldName === action.payload.fieldName);
      const tmpItem: fieldItem = {
        fieldSeq: action.payload.fieldSeq,
        fieldName: action.payload.fieldName,
        fieldValue: action.payload.fieldValue,
        errMessage: '',
      }
      if (index < 0) {
        state.fieldProps.push(tmpItem);
      } else {
        state.fieldProps[index] = tmpItem;
      };

    },
    addErrorField(state, action: { payload: { fieldName: string; fieldValue: string, errMessage: string, fieldSeq: number } }    ) {
      //console.log('addErrorField:' + action.payload.fieldName);
      let index = state.fieldProps.findIndex(item => item.fieldName === action.payload.fieldName);
      const tmpItem: fieldItem = {
        fieldSeq:   action.payload.fieldSeq,
        fieldName:  action.payload.fieldName,
        fieldValue: action.payload.fieldValue,
        errMessage: action.payload.errMessage,
      }
    if (index < 0) {
        state.fieldProps.push(action.payload);
        sortErrors(state.fieldProps, true);
      } else {
        state.fieldProps[index] = tmpItem;
      };
    },
    delErrorField(state, action: { payload: { fieldName: string} } ) {
      //console.log('delErrorField:' + action.payload.fieldName);
      let index = state.fieldProps.findIndex(item => item.fieldName === action.payload.fieldName);
      if (index > -1) {
        const tmpItem: fieldItem = {...state.fieldProps[index]};
        tmpItem.errMessage = '';
        state.fieldProps[index] = tmpItem;
      };
    },
  },
});

export const formActions = formSlice.actions;
