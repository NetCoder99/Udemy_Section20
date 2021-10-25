export {};
// import { createSlice } from '@reduxjs/toolkit';

// import { FieldStatusDef } from '../models/fieldStatusDef';
// import { FormStatusDef }  from '../models/FormStatusDef';

// // ------------------------------------------------------------------------------------------
// export interface FieldStatusPayload
//   { type: string, 
//     payload: {
//       item: FieldStatusDef
//     } 
//   };

// const initFormState: FieldStatusDef = {
//   hasError: false,
//   fieldMsg: '',
//   inpClass: '',
//   lblClass: '',
// };

// export const fieldStatusSlice = createSlice({
//   name: 'formStateSlice',
//   initialState: initFormState,
//   reducers: {
//     setFieldError(state, action: FieldStatusPayload) {
//         state.hasError = action.payload.item.hasError;
//         state.fieldMsg = action.payload.item.fieldMsg;
//     },
//     resetField(state) {
//         state.hasError=false;
//     },
//   }
// });

// export const formStateActions    = fieldStatusSlice.actions;