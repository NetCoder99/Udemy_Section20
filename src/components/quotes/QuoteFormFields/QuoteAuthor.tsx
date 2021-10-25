import React, { useState } from "react";
import classes from "./QuoteField.module.css";

import { useDispatch } from "react-redux";

import { isEmpty } from "../../../functions/validateQuote";
import { fieldItem, formActions } from "../../../store/formSlice";


// export interface fieldItem {
//   fieldSeq: number;
//   fieldName: string;
//   fieldValue: string;
//   errMessage?: string | '';
// }

export const fieldSeq   = 1;
export const fieldName  = 'quoteAuthor';
export const errMessage = "Author name must not be blank.";

export const QuoteAuthor = (props: any) => {
  const authorRef  = React.useRef<HTMLInputElement>(null);
  const [fieldState, setFieldState] = useState({ class: "" });
  const dispatch = useDispatch();

  function onBlurHandler(event: React.FocusEvent<HTMLInputElement>) {
    console.log("QuoteAuthor.onBlurHandler");
    dispatch(
      formActions.setFieldValue({
        fieldName: fieldName,
        fieldValue: event.currentTarget.value,
        fieldSeq: fieldSeq,
      })
    );     

    if (isEmpty(event.currentTarget.value)) {
      setFieldState({ class: classes.error });
      dispatch(formActions.addErrorField({fieldName:fieldName, fieldValue: event.currentTarget.value, errMessage: errMessage, fieldSeq: fieldSeq}));
    } else {
      setFieldState({ class: "" });
      dispatch(formActions.delErrorField({fieldName:fieldName}));
    }
  }

  return (
    <div className={classes.control}>
      <label htmlFor={fieldName}>Author</label>
      <input
        type="text"
        id={fieldName}
        className={fieldState.class}
        ref={authorRef}
        onBlur={onBlurHandler}
      />
    </div>
  );
};
