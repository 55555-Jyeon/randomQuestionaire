import { Grid } from "@mui/material";
import { QuestionItem } from "../../../types/type";
import OneCard from "./OneCard";
import { QuestionGridProps } from "./type";

const QuestionGrid = ({ QuestionList }: QuestionGridProps) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
    >
      {QuestionList.map((item: QuestionItem, idx: number) => (
        <OneCard key={`${item.category}-${idx}`} idx={idx} {...item} />
      ))}
    </Grid>
  );
};
export default QuestionGrid;
