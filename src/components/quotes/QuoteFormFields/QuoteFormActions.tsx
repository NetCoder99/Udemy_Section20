import React, { useEffect, useState } from "react";
import classes from "./QuoteField.module.css";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../../functions/validateQuote";
import useHttps from "../../../hooks/useHttps";
import { addQuote } from "../../../lib/api";
import { fieldItem } from "../../../store/formSlice";
import { QuoteDataDef } from "../../../models/QuoteDataDef";

function hasError(element: fieldItem) {return !isEmpty(element.errMessage);}
function getFirstError(fieldProps: Array<fieldItem>) {
  const errors = fieldProps.filter(hasError);
  if (errors.length > 0) { return errors[0].errMessage;}
  else { return '';}
}
function getFirstValue(fieldProps: Array<fieldItem>) {
  const values = fieldProps.filter((element: fieldItem)  => !isEmpty(element.fieldValue));
  if (values.length > 0) { return values[0].fieldValue;}
  else { return '';}
}
function getFieldValue(fieldProps: Array<fieldItem>, inpName: string) {
  const values = fieldProps.filter((element: fieldItem)  => element.fieldName === inpName);
  if (values.length > 0) { return values[0].fieldValue;}
  else { return '';}
}

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
    if (!getFirstError(formState.fieldProps)) {
      const quoteData: QuoteDataDef = {
        id: "q9",
        author: getFieldValue(formState.fieldProps, 'quoteAuthor'),
        text: getFieldValue(formState.fieldProps, 'quoteText'),
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
