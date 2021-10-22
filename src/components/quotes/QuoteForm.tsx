import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";

import { QuoteAuthor } from "./QuoteFormFields/QuoteAuthor";
import { QuoteTextArea } from "./QuoteFormFields/QuoteTextArea";
import { QuoteComment } from "./QuoteFormFields/QuoteComment";
import { QuoteFormActions } from "./QuoteFormFields/QuoteFormActions";

const QuoteForm = () => {
  console.log("QuoteForm.status:");
  return (
    <Card>
      <form className={classes.form}>
        <QuoteAuthor />
        <QuoteTextArea />
        <QuoteComment />
        <QuoteFormActions />
      </form>
    </Card>
  );
};

export default QuoteForm;
