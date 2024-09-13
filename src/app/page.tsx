"use client";

import { QUESTIONS } from "../../data/QuestionList";
import { useQuestionsFilter } from "../../hooks/useQuestionsFilter";
import FilterTabs from "./_component/filter";
import QuestionGrid from "./_component/QuestionGrid";
import styles from "./page.module.scss";

const Home = () => {
  const { currentCategory, handleTabChange, filteredQuestions, categories } =
    useQuestionsFilter(QUESTIONS);

  return (
    <div className={styles.container}>
      <h1>Random Interview Question</h1>
      <FilterTabs
        categories={categories}
        currentCategory={currentCategory}
        handleTabChange={handleTabChange}
      />
      <QuestionGrid QuestionList={filteredQuestions} />
    </div>
  );
};
export default Home;
