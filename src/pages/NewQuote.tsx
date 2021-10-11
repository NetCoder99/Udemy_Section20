import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import { QuoteDataDef } from "../models/QuoteDataDef";

const NewQuote = (props: any) => {
  const history = useHistory();

  const onAddQuote = (quote: QuoteDataDef) => {
    console.log("NewQuote.onAddQuote");
    console.log(quote);
    history.replace('/quotes')
  };

  return (
    <section>
      <h1>NewQuote</h1>
      <QuoteForm onAddQuote={onAddQuote}></QuoteForm>
    </section>
  );
};

export default NewQuote;
