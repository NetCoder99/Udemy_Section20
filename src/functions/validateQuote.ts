// @ts-nocheck
//import React from "react";

export function isEmpty(inpValue: string): Boolean {
    return inpValue.trim() === '';
}

export function isValid(inpValue: string, regex: string = ''): Boolean {
  return inpValue.trim() === '';
}

// export function isEmptyObj(
//     inpRef: React.Ref<HTMLInputElement|HTMLTextAreaElement>, 
//     errClass?: string,
//     setFocus?: boolean,
//     ): Boolean {
//     if (inpRef === null || inpRef.current === null) {
//         return true;
//     }
//     if (inpRef.current.value.trim() === '') {
//         inpRef.current.className = errClass;
//         { setFocus && inpRef.current.focus(); }
//         return true;
//     }
//     inpRef.current.className = "";
//     return false;
// }

// //export interface validReturn {hasError: boolean, }
// export function isValidObj(
//     inpRef: React.Ref<HTMLInputElement|HTMLTextAreaElement>, 
//     errClass?: string,
//     setFocus?: boolean,
//     ): Boolean {
//     if (inpRef === null || inpRef.current === null) {
//         return false;
//     }
//     if (inpRef.current.value.trim() === '') {
//         inpRef.current.className = errClass;
//         { setFocus && inpRef.current.focus(); }
//         return false;
//     }
//     inpRef.current.className = "";
//     return true;
// }

// export function isValidForm(
//     inpRefArray: React.Ref<HTMLInputElement|HTMLTextAreaElement>[], 
//     errClass?: string,
//     setFocus?: boolean,
//     ): Boolean {
//     if (inpRef === null || inpRef.current === null) {
//         return false;
//     }
//     if (inpRef.current.value.trim() === '') {
//         inpRef.current.className = errClass;
//         { setFocus && inpRef.current.focus(); }
//         return false;
//     }
//     inpRef.current.className = "";
//     return true;
// }
