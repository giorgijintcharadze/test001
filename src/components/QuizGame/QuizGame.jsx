import { useState } from "react";
import { quizQuestions } from "../Data/Quiz";
import Questions from "./Questions";
import styles from "./QuizGame.module.css";

const QuizGame = () => {
  const [QurrentQuestenIndex, setQurrentQuestenIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [ShowResulte, setShowResulte] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[QurrentQuestenIndex].answer) {
      setscore((prev) => prev + 1);
    }

    if (QurrentQuestenIndex + 1 < quizQuestions.length) {
      setQurrentQuestenIndex((prev) => prev + 1);
    } else {
      setShowResulte(true);
    }
  };
  return (
    <div>
      {ShowResulte ? (
        <p className={styles.score}>
          your final score is : {score}/{quizQuestions.length}
        </p>
      ) : (
        <Questions
          Questions={quizQuestions[QurrentQuestenIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizGame;
