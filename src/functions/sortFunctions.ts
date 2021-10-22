import { QuoteDataDef } from "../models/QuoteDataDef";
import { fieldItem} from '../store/formSlice';

export const sortQuotes = (quotes: QuoteDataDef[], ascending: boolean) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  export const sortErrors = (errors: fieldItem[], ascending?: boolean) => {
    return errors.sort((errorA, errorB) => {
      if (ascending) {
        return errorA.fieldSeq > errorB.fieldSeq ? 1 : -1;
      } else {
        return errorA.fieldSeq < errorB.fieldSeq ? 1 : -1;
      }
    });
  };  