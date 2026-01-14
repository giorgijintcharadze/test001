import { useState } from "react";
import styles from "./AccordionItem.module.css";

const Accordionitem = ({ question, answer }) => {
  const [isopen, setisopen] = useState(false);

  const handleopen = () => {
    setisopen((prev) => !prev);
  };

  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={handleopen}>
        {question} <span className={styles.icon}>{isopen ? "➖" : "➕"}</span>
      </button>

      {isopen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default Accordionitem;
