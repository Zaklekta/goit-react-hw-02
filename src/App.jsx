import "./App.css";
import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = JSON.parse(window.localStorage.getItem("saved-values"));
    if (savedValues !== null) {
      return savedValues;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = `${Math.round((values.good / totalFeedback) * 100)}%`;
  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };
  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        setValues={setValues}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positive}
        />
      )}
    </>
  );
}

export default App;
