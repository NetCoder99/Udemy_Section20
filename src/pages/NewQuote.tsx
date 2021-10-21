//import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
//import { QuoteDataDef } from "../models/QuoteDataDef";

//import  useHttp  from "../hooks/use-http";
//import useHttps from "../hooks/useHttps";

//import { addQuote } from "../lib/api";
//import { httpReducer } from "../hooks/useHttpReducer";
//import { useEffect, useReducer } from "react";


const NewQuote = (props: any) => {
  // const history = useHistory();
  
  // const {sendRequest, status, error } = useHttp(addQuote);

  // const onAddQuote = (quote: QuoteDataDef) => {
  //   console.log("NewQuote.onAddQuote");
  //   console.log(quote);
  //   sendRequest(quote);
  // };

  return (
    <section>
      <h1>NewQuote</h1>
      <QuoteForm />
    </section>
  );
};

export default NewQuote;

