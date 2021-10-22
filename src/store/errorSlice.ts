export {};
// import { createSlice } from "@reduxjs/toolkit";
// import { sortErrors } from "../functions/sortFunctions";

// export interface fieldError {
//   fieldSeq: number;
//   fieldName: string;
//   errMessage: string;
// }

// export const errorSlice = createSlice({
//   name: "formSlice",
//   initialState: { fieldErrors: new Array<fieldError>() },
//   reducers: {
//     resetFormErrors(state) {
//       state.fieldErrors = new Array<fieldError>();
//     },
//     addErrorField(state, action: { payload: { fieldName: string; errMessage: string, fieldSeq: number } }    ) {
//       console.log('addErrorField:' + action.payload.fieldName);
//       let index = state.fieldErrors.findIndex(item => item.fieldName === action.payload.fieldName);
//       if (index < 0) {
//         state.fieldErrors.push(action.payload);
//         sortErrors(state.fieldErrors, true);
//       }
//     },
//     delErrorField(state, action: { payload: { fieldName: string} } ) {
//       console.log('delErrorField:' + action.payload.fieldName);
//       let index = state.fieldErrors.findIndex(item => item.fieldName === action.payload.fieldName);
//       if (index > -1) {state.fieldErrors.splice(index, 1)};
//     },
//   },
// });

// export const errorActions = errorSlice.actions;
