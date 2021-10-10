import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = (props: any) => {

    // ------------------------------------------------------------------------------------------
    const onAddQuote = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log("NewQuote.onAddQuote");
    };

  return (
    <section>
      <h1>NewQuote</h1>
      <QuoteForm onAddQuote={onAddQuote}></QuoteForm>
    </section>
  );
};

export default NewQuote;
