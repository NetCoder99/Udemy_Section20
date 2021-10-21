import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';
import { sortQuotes }   from '../../functions/sortFunctions';
import { QuoteDataDef } from '../../models/QuoteDataDef';

import QuoteItem from './QuoteItem';
import classes   from './QuoteList.module.css';

const QuoteList = (props: {quotes: QuoteDataDef[]}) => {
  const history  = useHistory()
  const location = useLocation();
  const queryPArams = new URLSearchParams(location.search);
  const isSortedAsc = queryPArams.get('sort') === 'asc' ? true : false;

  const sortBtnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.push("/quotes?sort=" + (isSortedAsc ? 'desc' : 'asc'));
  }

  const srtdQuotes = sortQuotes(props.quotes, isSortedAsc);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortBtnHandler}>Sort {isSortedAsc ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {srtdQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
