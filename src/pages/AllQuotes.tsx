import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import { dummyQuotes } from '../data/QuoteData';

import useHttps  from '../hooks/useHttps';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {
  const {sendRequest} = useHttps(getAllQuotes);
  useEffect(() => {
    sendRequest(null);
    console.log("AllQuotes.status:");
  }, []);

  return (
    <section>
      <h1>AllQuotes</h1>
      <QuoteList quotes={dummyQuotes} ></QuoteList>
    </section>
  );
};

export default AllQuotes;
