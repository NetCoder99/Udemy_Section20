import { QuoteDataDef } from "../models/QuoteDataDef";

export type httpReducerState =
  | { status: "pending" }
  | { status: 'singleQuote', data:  QuoteDataDef }  
  | { status: "error"; errorMsg: string };
//  | { status: 'loading' }
//  | { status: 'success' }
//  | { status: 'allQuotes',   data:  QuoteDataDef[] }
//  | { status: 'allQuotes',   data:  QuoteDataDef[] }
//  ;

export type httpReducerAction =
  | { type: "request" }
  | { type: "addQuote" }
  | { type: "allQuotes";   results: QuoteDataDef[] }
  | { type: "singleQuote"; results: QuoteDataDef }
  | { type: "failure"; errorMsg: string };

export function httpReducer(
  state: httpReducerState,
  action: httpReducerAction
): httpReducerState {
  if (action.type === "request") {
    return { status: "pending" };
  }
  if (action.type === "singleQuote") {
    return { status: "singleQuote", data: action.results};
  }
  if (action.type === "failure") {
    return {status: "error", errorMsg: action.errorMsg || "Unkown Error!"};
  }
  return state;
}
