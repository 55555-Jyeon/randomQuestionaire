import { QuestionListType } from "../data/type";

export type QuestionItem = {
  question: string;
  category: keyof QuestionListType;
};
