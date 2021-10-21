import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "../../../functions/validateQuote";
import { formActions } from "../../../store/formSlice";
import classes from './QuoteField.module.css';

export const QuoteTextArea = (props: any) => {
  const fieldId = 'quoteText';
  const fieldSeq = 2;

  const quoteTextRef = React.useRef<HTMLTextAreaElement>(null);
  const [fieldState, setFieldState] = useState({ class: "" });
  const dispatch = useDispatch();

  function onBlurHandler(event: React.FocusEvent<HTMLTextAreaElement>) {
    console.log("QuoteTextArea.onBlurHandler");
    if (isEmpty(event.currentTarget.value)) {
      setFieldState({ class: classes.error });
      dispatch(formActions.addErrorField({fieldName:fieldId, errMessage: "Quote text must not be blank.", fieldSeq:fieldSeq}));
    } else {
      setFieldState({ class: "" });
      dispatch(formActions.delErrorField({fieldName:fieldId}));
    }
  }

  return (
    <div className={classes.control}>
      <label htmlFor={fieldId}>Text</label>
      <textarea
        id={fieldId}
        className={fieldState.class}
        ref={quoteTextRef}
        rows={5}
        onBlur={onBlurHandler}
      />
    </div>
  );
};

