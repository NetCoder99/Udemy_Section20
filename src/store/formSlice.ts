import { createSlice }  from "@reduxjs/toolkit";
import { sortFields }   from "../functions/sortFunctions";
import { isValid }      from "../functions/validateQuote";

export interface fieldItem {
  fieldSeq: number;
  fieldName: string;
  fieldValue?: string;
  errMessage?: string | '';
}

function getIndex(items: fieldItem[], fieldName: string): number {
  return items.findIndex(item => item.fieldName === fieldName);
};

function newItem(payload: fieldItem): fieldItem {
  return {
    fieldSeq:   payload.fieldSeq,
    fieldName:  payload.fieldName,
    fieldValue: payload.fieldValue,
    errMessage: payload.errMessage,
  };
};

export const formSlice = createSlice({
  name: "formSlice",
  initialState: { fieldProps: new Array<fieldItem>() },
  reducers: {
    resetFormState(state) {
      state.fieldProps = new Array<fieldItem>();
    },

    setFieldValue(state, action: { payload: { fieldName: string; fieldValue: string, fieldSeq: number } }    ) {
      //console.log('setValueField:' + action.payload.fieldName);
      let index = getIndex(state.fieldProps, action.payload.fieldName);
      const tmpItem: fieldItem = newItem(action.payload); 
      if (index < 0) {
        state.fieldProps.push(tmpItem);
      } else {
        state.fieldProps[index] = tmpItem;
      };
      sortFields(state.fieldProps, true);
    },
    
    addErrorField(state, action: { payload: { fieldName: string; fieldValue: string, errMessage: string, fieldSeq: number } }    ) {
      let index = getIndex(state.fieldProps, action.payload.fieldName);
      const tmpItem: fieldItem = newItem(action.payload); 
      if (index < 0) {
        state.fieldProps.push(action.payload);
      } else {
        state.fieldProps[index] = tmpItem;
      };
      sortFields(state.fieldProps, true);
    },
    
    delErrorField(state, action: { payload: { fieldName: string} } ) {
      //console.log('delErrorField:' + action.payload.fieldName);
      let index = state.fieldProps.findIndex(item => item.fieldName === action.payload.fieldName);
      if (index > -1) {
        const tmpItem: fieldItem = {...state.fieldProps[index]};
        tmpItem.errMessage = '';
        state.fieldProps[index] = tmpItem;
        sortFields(state.fieldProps, true);
      };
    },
    
    validateField(state, action: {payload: {item: fieldItem}}) {
      let index = getIndex(state.fieldProps, action.payload.item.fieldName);
      const tmpItem: fieldItem = newItem(action.payload.item); 

      if (!isValid(action.payload.item.fieldValue || '')){
        tmpItem.errMessage = action.payload.item.errMessage;
      }
      else 
      {tmpItem.errMessage = '';}

      if (index < 0) {
        state.fieldProps.push(tmpItem);
      } else {
        state.fieldProps[index] = tmpItem;
      };
    },

  },

});

export const formActions = formSlice.actions;
