import QuoteList from '../components/quotes/QuoteList';
import { dummyQuotes } from '../data/QuoteData';

const AllQuotes = () => {
  return (
    <section>
      <h1>AllQuotes</h1>
      <QuoteList quotes={dummyQuotes} ></QuoteList>
    </section>
  );
};

export default AllQuotes;
