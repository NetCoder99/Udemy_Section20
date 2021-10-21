import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "../../../functions/validateQuote";
import { formActions } from "../../../store/formSlice";
import classes from './QuoteField.module.css';

export const QuoteComment = (props: any) => {
  const fieldId = 'quoteComment';
  const fieldSeq = 3;

  const quoteTextRef = React.useRef<HTMLTextAreaElement>(null);
  const [fieldState, setFieldState] = useState({ class: "" });
  const dispatch = useDispatch();

  function onBlurHandler(event: React.FocusEvent<HTMLTextAreaElement>) {
    console.log("QuoteComment.onBlurHandler");
    if (isEmpty(event.currentTarget.value)) {
      setFieldState({ class: classes.error });
      dispatch(formActions.addErrorField({fieldName:fieldId, errMessage: "Comment text must not be blank.", fieldSeq:fieldSeq}));
    } else {
      setFieldState({ class: "" });
      dispatch(formActions.delErrorField({fieldName:fieldId}));
    }
  }

  return (
    <div className={classes.control}>
      <label htmlFor={fieldId}>Comment</label>
      <textarea
        id={fieldId}
        className={fieldState.class}
        ref={quoteTextRef}
        rows={2}
        onBlur={onBlurHandler}
      />
    </div>
  );
};

