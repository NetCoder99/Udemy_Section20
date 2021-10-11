import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { dummyQuotes } from '../data/QuoteData';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { QuoteDataDef } from '../models/QuoteDataDef';


interface queryParams {
  quoteId: string,
}
const QuoteDetail = (props: any) => {
  const params: queryParams = useParams();
  const quote: QuoteDataDef = dummyQuotes.find(item => item.id === params.quoteId)!;

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <section>
      <h1>QuoteDetail</h1>
      <p>Quote Id: {params.quoteId}</p>
      
      <HighlightedQuote id={quote.id}
            author={quote.author}
            text={quote.text} />

      <Route exact path={`/quotes/${params.quoteId}/comments`}>
        <Comments quoteId="test" />
      </Route>
    </section>
  );
};

export default QuoteDetail;
