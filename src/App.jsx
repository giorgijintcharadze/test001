import "./app.css";
import Heder from "./components/Heder";
import Button from "./components/Button";
import Popup from "./components/Popup";
import IncrimentDecriment from "./components/IncrimentDecriment";
import Onchange from "./components/Onchange";
import LikeButton from "./components/LikeButton";
import { useState } from "react";
import ShowhidePassword from "./components/ShowhidePassword";
import Todo from "./components/todo/Todo";
import Accordion from "./components/Accordion/Accordion";
import { faqData } from "./components/Data/questions";
import Questions from "./components/QuizGame/Questions";
import { quizQuestions } from "./components/Data/Quiz";
import styles from "./components/QuizGame/QuizGame.module.css";
import QuizGame from "./components/QuizGame/QuizGame";

const App = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          {/* <Heder /> */}
          {/* <Popup /> */}
          {/* <IncrimentDecriment /> */}
          {/* <Onchange /> */}
          {/* <LikeButton /> */}
          {/* <ShowhidePassword /> */}
          {/* <h1>My To Do list</h1>
          <Todo /> */}
          {/* <Accordion items={faqData} /> */}
          <h1>
            <QuizGame />
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
