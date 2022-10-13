import React from "react";
import Grid from "@mui/material/Grid";
import Gradient from "./gradient";
import Brush from "./brush";

const Line = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Gradient />
        </Grid>
        <Grid item xs={6}>
          <Brush />
        </Grid>
        <Grid item xs={6}>
          h
        </Grid>
        <Grid item xs={6}>
          h
        </Grid>
        <Grid item xs={6}>
          j
        </Grid>
        <Grid item xs={6}>
          y
        </Grid>
      </Grid>
    </>
  );
};

export default Line;
