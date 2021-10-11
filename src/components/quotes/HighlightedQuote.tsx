import { QuoteDataDef } from '../../models/QuoteDataDef';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props: QuoteDataDef) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
