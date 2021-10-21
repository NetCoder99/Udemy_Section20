import React from "react";
//import { useForm } from "react-hook-form";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";

import { formActions } from "../../store/formSlice";

import { QuoteAuthor } from "./QuoteFormFields/QuoteAuthor";
import { QuoteTextArea } from "./QuoteFormFields/QuoteTextArea";
import { QuoteComment } from "./QuoteFormFields/QuoteComment";

const QuoteForm = (props: any) => {
  console.log("QuoteForm.status:" + props.status);

  const dispatch  = useDispatch();
  const formState = useSelector((state: RootStateOrAny) => state.formState);

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("QuoteForm.submitFormHandler");
    dispatch(formActions.resetFormState());
  }
  const formLeaveHandler= (event: React.MouseEvent<HTMLElement>) => {
    console.log("QuoteForm.formLeaveHandler");
  };
  const formFocusHandler= (event: React.FocusEvent<HTMLFormElement>) => {
    console.log("QuoteForm.formFocusHandler");
  };

  return (
    <Card>
      <form className={classes.form} onFocus={formFocusHandler} onSubmit={submitFormHandler}>
        <QuoteAuthor   /> 
        <QuoteTextArea />
        <QuoteComment />

        <div className={classes.actions}>
          {formState.errorFields.length > 0 && 
            <label className={`${classes.message} ${classes.error}`}>
            {formState.errorFields[0].errMessage}
            </label>
          }
          <label className={`${classes.message} ${formState.msgClass}`}>
            {props.status === 'completed' && 'Quote was added'}
            {props.status === 'error' && props.errorMsg}
          </label>
          <button 
            onClick={formLeaveHandler} 
            className="btn"
            disabled={formState.errorFields.length > 0}
          >Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
