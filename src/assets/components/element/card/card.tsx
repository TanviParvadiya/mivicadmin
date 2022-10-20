import React from "react";
import Grid from "@mui/material/Grid";
import OutlinedCard from "./outlined";
import RecipeReviewCard from "./complexInteraction";
import MediaControlCard from "./mediaControlCard";

const Card = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <OutlinedCard />
        </Grid>
        <Grid item xs={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6}>
          <MediaControlCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
