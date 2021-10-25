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

  export const sortFields = (fields: fieldItem[], ascending?: boolean) => {
    return fields.sort((field1, field2) => {
      if (ascending) {
        return field1.fieldSeq > field2.fieldSeq ? 1 : -1;
      } else {
        return field1.fieldSeq < field2.fieldSeq ? 1 : -1;
      }
    });
  };  