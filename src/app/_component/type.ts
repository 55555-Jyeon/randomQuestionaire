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

export type FilterTabsProps = {
  categories: string[];
  currentCategory: string;
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
};
