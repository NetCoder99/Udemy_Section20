import React, { useEffect, useState } from "react";
import classes from "./QuoteField.module.css";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../../functions/validateQuote";
import useHttps from "../../../hooks/useHttps";
import { addQuote } from "../../../lib/api";
import { fieldItem } from "../../../store/formSlice";
import { QuoteDataDef } from "../../../models/QuoteDataDef";
import { getFirstError, getFirstValue, getFieldValue } from "../../../functions/fieldFunctions";

export const QuoteFormActions = (props: any) => {
  console.log("QuoteFormActions.init");
  const {sendRequest} = useHttps(addQuote);

  const formState     = useSelector((state: RootStateOrAny) => state.formState);
  const errMsg        = getFirstError(formState.fieldProps);
  const [wasTouched, setWasTouched] = useState(false);

  useEffect(() => {
    if (getFirstValue(formState.fieldProps)) {
      console.log('was touched');
      setWasTouched(true);
    }
  }, [formState]);

  function submitFormHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("QuoteFormActions.submitFormHandler");

    const author  = getFieldValue(formState.fieldProps, 'quoteAuthor');
    const text    = getFieldValue(formState.fieldProps, 'quoteText');
    const comment = getFieldValue(formState.fieldProps, 'quoteComment');

    //if (!validateAllFields(formState.fieldProps) ) {
    //}

    if (!getFirstError(formState.fieldProps)) {
      const quoteData: QuoteDataDef = {
        id: "q9",
        author: getFieldValue(formState.fieldProps, 'quoteAuthor'),
        text:   getFieldValue(formState.fieldProps, 'quoteText'),
      }
      sendRequest(quoteData);
    };
  }

  return (
    <div className={classes.actions}>
      {errMsg  && (<label className={`${classes.message} ${classes.invalid}`}>{errMsg}</label>)}
      {!errMsg && (<label className={`${classes.message} ${classes.success}`}>Form Ok</label>)}
      
      <label className={`${classes.message} ${formState.msgClass}`}></label>
      <button onClick={submitFormHandler} disabled={!isEmpty(errMsg) || !wasTouched} className="btn">
        Add Quote
      </button>
    </div>
  );
};
