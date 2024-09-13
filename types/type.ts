import { QuestionListType } from "../data/type";

export type QuestionItem = {
  question: string;
  category: keyof QuestionListType;
};

export type TProps = {
  question: string;
  category: string | number;
  key: string;
  idx: number;
};
