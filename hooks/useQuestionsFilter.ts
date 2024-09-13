import { useState } from "react";
import { QuestionListType } from "../data/type";
import { QuestionItem } from "../types/type";

/**
 * 질문 필터링을 위한 커스텀 훅
 * @param QUESTIONS - 모든 카테고리의 질문 목록
 * @returns - 현재 카테고리, 카테고리 변경 핸들러, 필터링된 질문 목록, 카테고리 목록
 */
export const useQuestionsFilter = (QUESTIONS: QuestionListType) => {
  const [currentCategory, setCurrentCategory] = useState<string>("all");

  /**
   * 탭 클릭 핸들러
   * @param event - 클릭 이벤트
   * @param newValue - 새로운 카테고리 값
   */
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentCategory(newValue);
  };

  /**
   * 배열을 무작위로 섞는 함수
   * @param array - 무작위로 섞을 배열
   * @returns - 무작위로 섞인 배열
   */
  const shuffleArray = (array: QuestionItem[]): QuestionItem[] => {
    return array.sort(() => 0.5 - Math.random());
  };

  /**
   * 현재 카테고리에 따라 필터링된 질문 목록을 반환합니다.
   * @returns - 필터링된 질문 목록
   */
  const filteredQuestions: QuestionItem[] =
    currentCategory === "all"
      ? shuffleArray(
          Object.entries(QUESTIONS).flatMap(([category, questions]) =>
            questions.map((question) => ({ question, category }))
          )
        )
      : shuffleArray(
          (QUESTIONS[currentCategory] || []).map((question) => ({
            question,
            category: currentCategory,
          }))
        );

  const categories = ["all", ...Object.keys(QUESTIONS)];

  return {
    currentCategory,
    handleTabChange,
    filteredQuestions,
    categories,
  };
};
