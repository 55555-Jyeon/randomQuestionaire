import { Grid } from "@mui/material";
import { QuestionItem } from "../../../types/type";
import OneCard from "./OneCard";
import { QuestionGridProps } from "./type";

const QuestionGrid = ({ QuestionList }: QuestionGridProps) => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      {QuestionList.map((item: QuestionItem, idx: number) => (
        <OneCard key={`${item.category}-${idx}`} idx={idx} {...item} />
      ))}
    </Grid>
  );
};
export default QuestionGrid;
