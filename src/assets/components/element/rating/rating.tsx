import React from "react";
import Grid from "@mui/material/Grid";
import BasicRating from "./basic";
import HalfRating from "./precision";
import HoverRating from "./hoverFeedback";
import RadioGroupRating from "./radioGroup";

const Rating = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <BasicRating />
        </Grid>
        <Grid item xs={6}>
          <HalfRating />
        </Grid>
        <Grid item xs={6}>
          <HoverRating />
        </Grid>
        <Grid item xs={6}>
          <RadioGroupRating />
        </Grid>
      </Grid>
    </>
  );
};

export default Rating;
