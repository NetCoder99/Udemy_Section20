import React, { useState } from "react";
import classes from "./QuoteField.module.css";

import { useDispatch } from "react-redux";

import { isEmpty } from "../../../functions/validateQuote";
import { formActions } from "../../../store/formSlice";

export const QuoteAuthor = (props: any) => {
  const fieldId = 'quoteAuthor';
  const fieldSeq = 1;
  const errMessage = "Author name must not be blank.";

  const authorRef = React.useRef<HTMLInputElement>(null);
  const [fieldState, setFieldState] = useState({ class: "" });
  const dispatch = useDispatch();

  function onBlurHandler(event: React.FocusEvent<HTMLInputElement>) {
    console.log("QuoteAuthor.onBlurHandler");
    dispatch(
      formActions.setFieldValue({
        fieldName: fieldId,
        fieldValue: event.currentTarget.value,
        fieldSeq: fieldSeq,
      })
    );     
    if (isEmpty(event.currentTarget.value)) {
      setFieldState({ class: classes.error });
      dispatch(formActions.addErrorField({fieldName:fieldId, fieldValue: event.currentTarget.value, errMessage: errMessage, fieldSeq: fieldSeq}));
    } else {
      setFieldState({ class: "" });
      dispatch(formActions.delErrorField({fieldName:fieldId}));
    }
  }

  return (
    <div className={classes.control}>
      <label htmlFor={fieldId}>Author</label>
      <input
        type="text"
        id={fieldId}
        className={fieldState.class}
        ref={authorRef}
        onBlur={onBlurHandler}
      />
    </div>
  );
};
