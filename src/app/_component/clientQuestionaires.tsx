"use client";

import React, { useEffect, useState } from "react";
import QuestionGrid from "./QuestionGrid";
import { useQuestionsFilter } from "../../../hooks/useQuestionsFilter";
import { QUESTIONS } from "../../../data/QuestionList";
const FilterTabs = React.lazy(() => import("./filter"));

const ClientQuestionComponent = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { currentCategory, handleTabChange, filteredQuestions, categories } =
    useQuestionsFilter(QUESTIONS);

  if (!isClient) return null;
  return (
    <>
      <FilterTabs
        categories={categories}
        currentCategory={currentCategory}
        handleTabChange={handleTabChange}
      />
      <QuestionGrid QuestionList={filteredQuestions} />
    </>
  );
};
export default ClientQuestionComponent;
