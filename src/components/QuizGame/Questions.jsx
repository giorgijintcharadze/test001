import styles from "./QuizGame.module.css";

const Questions = ({ Questions, handleAnswer }) => {
  return (
    <div className={styles.questionBox}>
      <h2>{Questions.question}</h2>
      {Questions.options.map((eachellement) => (
        <button
          className={styles.option}
          onClick={() => handleAnswer(eachellement)}
        >
          {eachellement}
        </button>
      ))}
    </div>
  );
};

export default Questions;
