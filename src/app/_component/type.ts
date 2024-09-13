import { QuestionItem } from "../../../types/type";

export type OneCardProps = {
  question: string;
  category: string | number;
  key: string;
  idx: number;
};

export type QuestionGridProps = {
  QuestionList: QuestionItem[];
};
