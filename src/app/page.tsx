"use client";

import { useRandomQuestions } from "../../hooks/useRandomQuestions";
import QuestionGrid from "./_component/QuestionGrid";
import styles from "./page.module.scss";

const Home = () => {
  const randomQuestions = useRandomQuestions();

  return (
    <div className={styles.container}>
      <h1>Random Interview Question</h1>
      <QuestionGrid QuestionList={randomQuestions} />
    </div>
  );
};
export default Home;
