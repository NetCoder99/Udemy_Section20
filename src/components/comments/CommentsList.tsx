import { QuoteDataDef } from '../../models/QuoteDataDef';
import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

interface inpProps {
  comments: Array<QuoteDataDef>,
}
const CommentsList = (props: inpProps) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
