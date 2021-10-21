import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { dummyQuotes } from "../data/QuoteData";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { QuoteDataDef } from "../models/QuoteDataDef";

interface queryParams {
  quoteId: string;
}
const QuoteDetail = (props: any) => {
  const routeMatch = useRouteMatch();
  console.log(routeMatch);
  const params: queryParams = useParams();
  const quote: QuoteDataDef = dummyQuotes.find(
    (item) => item.id === params.quoteId
  )!;

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <section>
      <HighlightedQuote id={quote.id} author={quote.author} text={quote.text} />
      <Route exact path={`${routeMatch.path}`}>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route exact path={`${routeMatch.path}/comments`}>
        <Comments quoteId="test" />
      </Route>

    </section>
  );
};

export default QuoteDetail;
