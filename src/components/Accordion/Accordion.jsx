import Accordionitem from "./Accordionitem";
import styles from "./Accordion.module.css";

const Accordion = ({ items }) => {
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <Accordionitem question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Accordion;
