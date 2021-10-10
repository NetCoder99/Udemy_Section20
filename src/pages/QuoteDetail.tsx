import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

interface queryParams {
  quoteId: string,
}
const QuoteDetail = (props: any) => {
  const params: queryParams = useParams();
  return (
    <section>
      <h1>QuoteDetail</h1>
      <p>Quote Id: {params.quoteId}</p>
      <Route exact path={`/quotes/${params.quoteId}/comments`}>
        <Comments quoteId="test" />
      </Route>
    </section>
  );
};

export default QuoteDetail;
