import React, { useEffect, useRef, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

import { formStateActions } from "../../store/formStateSlice";
import { isEmpty, isEmptyObj, isValidObj } from "../../functions/validateQuote";
import { FormStatusDef } from "../../models/FormStatusDef";

const QuoteForm = (props: any) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootStateOrAny) => state.formState);

  const authorInputRef = React.useRef<HTMLInputElement>(null);
  const textInputRef = React.useRef<HTMLTextAreaElement>(null);
  const payload: FormStatusDef = {};

  function onBlurHandler(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.target.id.toString() === "author") {
      if (!isValidObj(textInputRef, classes.errorInput, true)) {
        payload.hasError = true;
        payload.formMsg  = "Author is required";
        payload.msgClass = classes.error;
        dispatch(formStateActions.setFormState({item: payload}));
      }
    }
    if (event.target.id.toString() === "text") {
      if (!isValidObj(textInputRef, classes.errorInput, true)) {
        payload.hasError = true;
        payload.formMsg  = "Text is required";
        payload.msgClass = classes.error;
        dispatch(formStateActions.setFormState({item: payload}));
      }
    }
  }

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("QuoteForm.submitFormHandler");
    dispatch(formStateActions.resetFormState());

    if (!isValidObj(textInputRef, classes.errorInput, true)) {
      payload.hasError = true;
      payload.formMsg  = "Text is required";
      payload.msgClass = classes.error;
      dispatch(formStateActions.setFormState({item: payload}));
    }
    if (!isValidObj(authorInputRef, classes.errorInput, true)) {
      payload.hasError = true;
      payload.formMsg  = "Author is required";
      payload.msgClass = classes.error;
      dispatch(formStateActions.setFormState({item: payload}));
    }

    props.onAddQuote({ author: authorInputRef.current?.value || "", text: textInputRef.current?.value || "" });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
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
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
