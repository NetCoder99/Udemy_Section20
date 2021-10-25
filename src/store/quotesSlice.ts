import { createSlice } from '@reduxjs/toolkit';
import { QuoteDataDef } from "../models/QuoteDataDef";

// ------------------------------------------------------------------------------------------
export const initQuoteStatus:QuoteDataDef[] = [];

export const quotesSlice = createSlice({
  name: 'formStateSlice',
  initialState: initQuoteStatus,
  reducers: {
    reset(state) {
      console.log('quotesSlice.reset');
      state = [];
    },
    setData(state, action: {payload: {items: QuoteDataDef[]}}) {
      console.log('quotesSlice.setData:' + {...action.payload.items});
      state = action.payload.items;
    },
    setCrntItem(state, action: {payload: {quoteId: string}}) {
      console.log('quotesSlice.setCrntItem:' + action.payload.quoteId);
    },
    updItem(state, action: {payload: {quoteId: string, author: string, text: string}}) {
      console.log('quotesSlice.setCrntItem:' + action.payload.quoteId);

    },
  }
});

export const apiActions  = quotesSlice.actions;