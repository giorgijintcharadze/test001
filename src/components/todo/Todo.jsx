import { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }

    console.log("task :", task);
  };

  //   const Addinput = (event) => {
  //     setTask(event.target.value);
  //   };

  const RemoweTasks = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
    console.log("წაშლა :", task);
  };

  return (
    <div className={styles.Todo}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a Task.."
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTask();
          }
        }}
        value={task}
      />
      <button onClick={addTask} className={styles.button}>
        Add
      </button>
      <ul className={styles.ul}>
        {tasks.map((task, i) => (
          <li key={task}>
            {task} <button onClick={() => RemoweTasks(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
