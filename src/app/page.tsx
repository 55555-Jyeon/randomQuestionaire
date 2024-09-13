"use client";

import { useEffect, useState } from "react";
import OneCard from "./_component/OneCard";
import { QuestionItem } from "../../types/type";
import { Grid } from "@mui/material";
import styles from "./page.module.scss";
import { questions } from "../../data/QuestionList";
import { QuestionListType } from "../../data/type";

export default function Home() {
  const [randomQuestions, setRandomQuestions] = useState<QuestionItem[]>([]);

  const initializeQuestions = (): QuestionItem[] => {
    const allQuestions: QuestionItem[] = [];

    (Object.entries(questions) as [keyof QuestionListType, string[]][]).forEach(
      ([category, questions]) => {
        questions.forEach((question) => {
          allQuestions.push({ question, category });
        });
      }
    );

    return allQuestions;
  };

  useEffect(() => {
    //랜덤하게 배열을 섞는 함수 작성
    //양수와 음수가 랜덤하게 반환되므로 sort()가 무작위로 요소를 섞게됨
    const shuffledQuestions = initializeQuestions().sort(
      () => 0.5 - Math.random()
    );
    setRandomQuestions(shuffledQuestions);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Random Interview Question</h1>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        {randomQuestions.map((item: QuestionItem, idx: number) => (
          <OneCard key={`${item.category}-${idx}`} idx={idx} {...item} />
        ))}
      </Grid>
    </div>
  );
}
