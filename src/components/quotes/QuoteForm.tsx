import React, { Fragment, useEffect, useRef, useState } from "react";
import { Prompt } from 'react-router-dom';

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

import { formStateActions } from "../../store/formStateSlice";
import { isValidObj } from "../../functions/validateQuote";
import { FormStatusDef } from "../../models/FormStatusDef";

const QuoteForm = (props: any) => {
  const [formTouched, setFormTouched] = useState(false);

  const dispatch  = useDispatch();
  const formState = useSelector((state: RootStateOrAny) => state.formState);

  const authorInputRef = React.useRef<HTMLInputElement>(null);
  const textInputRef   = React.useRef<HTMLTextAreaElement>(null);

  const payloadErr: FormStatusDef = {};
  payloadErr.hasError = true;
  payloadErr.msgClass = classes.error;

  function onBlurHandler(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.target.id.toString() === "author") {
      if (!isValidObj(textInputRef, classes.errorInput, true)) {
        payloadErr.formMsg  = "Author is required";
        dispatch(formStateActions.setFormState({item: payloadErr}));
      }
    }
    if (event.target.id.toString() === "text") {
      if (!isValidObj(textInputRef, classes.errorInput, true)) {
        payloadErr.formMsg  = "Text is required";
        dispatch(formStateActions.setFormState({item: payloadErr}));
      }
    }
  }

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("QuoteForm.submitFormHandler");
    dispatch(formStateActions.resetFormState());

    if (!isValidObj(textInputRef, classes.errorInput, true)) {
      payloadErr.formMsg  = "Text is required";
      dispatch(formStateActions.setFormState({item: payloadErr}));
    }
    if (!isValidObj(authorInputRef, classes.errorInput, true)) {
      payloadErr.formMsg  = "Author is required";
      dispatch(formStateActions.setFormState({item: payloadErr}));
    }

    props.onAddQuote({ author: authorInputRef.current?.value || "", text: textInputRef.current?.value || "" });
  }

  const formLeaveHandler= (event: React.MouseEvent<HTMLElement>) => {
    console.log("QuoteForm.formLeaveHandler");
    setFormTouched(false);
  };

  const formFocusHandler= (event: React.FocusEvent<HTMLFormElement>) => {
    console.log("QuoteForm.formFocusHandler");
    setFormTouched(true);
  };

  return (
    <Fragment>
      <Prompt when={formTouched} message={(location) => "Are you sure?"} />
    <Card>
      <form className={classes.form} onFocus={formFocusHandler} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            ref={authorInputRef}
            onBlur={onBlurHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows={5}
            ref={textInputRef}
            onBlur={onBlurHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <label className={`${classes.message} ${formState.msgClass}`}>
            {formState.formMsg}
          </label>
          <button onClick={formLeaveHandler} className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
