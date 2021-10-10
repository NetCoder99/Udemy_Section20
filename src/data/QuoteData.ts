import { QuoteDataDef } from "../models/QuoteDataDef";

export const dummyQuotes:QuoteDataDef[] = [
    {id: "q1",text: "Quote 1",author: "John"},
    {id: "q2",text: "Quote 2",author: "Jim"},
    {id: "q3",text: "Quote 3",author: "Steve"},
    buildQuote4()
];

function buildQuote4({id="q4",text="Quote 4",author="Max"}: Partial<QuoteDataDef> = {}): QuoteDataDef 
  { return {id,text,author}; }
