"use client";

import styles from "./oneCard.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState } from "react";
import { OneCardProps } from "./type";

const OneCard = ({ idx, category, question }: OneCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleShowCard = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item key={idx} className={styles.card}>
      <Card
        className={`${styles.flipper} ${isFlipped ? styles["is-flipped"] : ""}`}
        onClick={handleShowCard}
        sx={{ width: 230, height: 230 }}
      >
        {!isFlipped ? (
          <div className={styles.front}>
            <h1>{idx + 1}</h1>
          </div>
        ) : (
          ""
        )}
        <div className={styles.back}>
          <CardContent className={styles.innerContainer}>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Typography
              className={styles.text}
              gutterBottom
              variant="h6"
              component="div"
            >
              {question}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};
export default OneCard;
