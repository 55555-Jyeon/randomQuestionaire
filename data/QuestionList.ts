import { BasicQuestions } from "./byTopic/basic";
import { CSquestions } from "./byTopic/computerScience";
import { CSSquestions } from "./byTopic/CSS";
import { HTMLquestions } from "./byTopic/HTML";
import { JSquestions } from "./byTopic/javaScript";
import { ProjectQuestions } from "./byTopic/project";
import { ReactQuestions } from "./byTopic/react";
import { TSquestions } from "./byTopic/typeScript";
import { QuestionListType } from "./type";

export const questions: QuestionListType = {
  CS: CSquestions,
  HTML: HTMLquestions,
  CSS: CSSquestions,
  JS: JSquestions,
  TS: TSquestions,
  React: ReactQuestions,
  Project: ProjectQuestions,
  Basic: BasicQuestions,
};
