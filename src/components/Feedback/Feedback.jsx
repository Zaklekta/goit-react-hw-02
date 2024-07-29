import css from "./Feedback.module.css";
import clsx from "clsx";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css["feedback-list"]}>
      <li className={css["feedback-item"]}>Good: {good}</li>
      <li className={css["feedback-item"]}>Neutral: {neutral}</li>
      <li className={css["feedback-item"]}>Bad: {bad}</li>
      <li className={css["feedback-item"]}>Total: {total}</li>
      <li
        className={clsx(
          css["feedback-item"],
          Number(positive.slice(0, -1)) >= 60 && css.green
        )}
      >
        Positive: {positive}
      </li>
    </ul>
  );
};

export default Feedback;
