import { useReducer } from "react";
import { httpReducer } from "./useHttpReducer";
import { addQuote, getAllQuotes, getSingleQuote } from "../lib/api";
//import { QuoteDataDef } from "../models/QuoteDataDef";

function useHttps(requestFunction: any) {

  //const quotes:QuoteDataDef[] = [];
  //const [httpState, httpDsptch]   = useReducer(httpReducer, { status: 'loading'});
  const [httpState, httpDsptch] = useReducer(httpReducer, { status: 'error', errorMsg: ''});

  const sendRequest = async function (requestData: any) {
      httpDsptch({ type: "request" });

      try {
        const responseData = await requestFunction(requestData);
        if (requestFunction === addQuote) {
          httpDsptch({ type: "addQuote" });
        }
        if (requestFunction === getAllQuotes) {
          httpDsptch({ type: "allQuotes", results: responseData });
          console.log("useHttps:");
          console.log(responseData);
        }
        if (requestFunction === getSingleQuote) {
          httpDsptch({ type: "singleQuote", results: responseData });
        }
        //httpDsptch({ type: 'success', responseData });
      } catch (error: any) {
        httpDsptch({
          type: "failure",
          errorMsg: error.message || "Something went wrong!",
        });
      }
    };
    

  return {
    sendRequest, 
    ...httpState
  };
}

export default useHttps;

