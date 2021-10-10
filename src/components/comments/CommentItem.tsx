import classes from './CommentItem.module.css';

interface inpProps {
  text: string,
}
const CommentItem = (props: inpProps) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
