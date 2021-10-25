import { fieldItem } from "../store/formSlice";
import { isEmpty } from "./validateQuote";

export function hasError(element: fieldItem) {return !isEmpty(element.errMessage || '');}

export function getFirstError(fieldProps: Array<fieldItem>): string {
  const errors = fieldProps.filter(hasError);
  if (errors.length > 0) { return errors[0].errMessage || '';}
  else { return '';}
}
export function getFirstValue(fieldProps: Array<fieldItem>): string {
  const values = fieldProps.filter((element: fieldItem)  => !isEmpty(element.fieldValue|| ''));
  if (values.length > 0) { return values[0].fieldValue|| '';}
  else { return '';}
}
export function getFieldValue(fieldProps: Array<fieldItem>, inpName: string): string {
  const values = fieldProps.filter((element: fieldItem)  => element.fieldName === inpName);
  if (values.length > 0) { return values[0].fieldValue|| '';}
  else { return '';}
}