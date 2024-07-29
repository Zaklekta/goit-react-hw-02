import css from "./Options.module.css";

const Options = ({ updateFeedback, total, setValues }) => {
  return (
    <div className={css["btn-box"]}>
      <button
        className={css["btn"]}
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css["btn"]}
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css["btn"]}
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          className={css["btn"]}
          type="button"
          onClick={() => {
            setValues({ good: 0, neutral: 0, bad: 0 });
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
