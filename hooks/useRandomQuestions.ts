import { useEffect, useState } from "react";
import { QUESTIONS } from "../data/QuestionList";
import { QuestionListType } from "../data/type";
import { QuestionItem } from "../types/type";

/**
 * @function initializeQuestions 질문 초기화 함수
 * @description 모든 질문을 카테고리별로 초기화하여 하나의 배열로 반환
 *
 * @returns {QuestionItem[]} 카테고리와 질문이 담긴 객체 배열
 */

export const initializeQuestions = (): QuestionItem[] => {
  const allQuestions: QuestionItem[] = [];

  (Object.entries(QUESTIONS) as [keyof QuestionListType, string[]][]).forEach(
    ([category, questions]) => {
      questions.forEach((question) => {
        allQuestions.push({ question, category });
      });
    }
  );
  return allQuestions;
};

/**
 * @function useRandomQuestions 랜덤 질문 생성 함수
 * @description 모든 질문을 무작위로 섞은 후 상태에 저장하여 반환하는 훅 함수
 *
 * @returns {QuestionItem[]} 무작위로 섞인 질문 배열
 */
export const useRandomQuestions = (): QuestionItem[] => {
  const [randomQuestions, setRandomQuestions] = useState<QuestionItem[]>([]);

  useEffect(() => {
    //랜덤하게 배열을 섞는 함수 작성
    //양수와 음수가 랜덤하게 반환되므로 sort()가 무작위로 요소를 섞게됨
    const shuffledQuestions = initializeQuestions().sort(
      () => 0.5 - Math.random()
    );
    setRandomQuestions(shuffledQuestions);
  }, []);

  return randomQuestions;
};
