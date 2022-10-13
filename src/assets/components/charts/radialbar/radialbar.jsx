import React from "react";
import Grid from "@mui/material/Grid";
import Basicradial from "./basicradial";
import Multiple from "./multiple";
import Customangle from "./customangle";
import Gradient from "./gradient";
import Stroked from "./stroked";
import Semicircular from "./semicircular";

const Radialbar = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Basicradial />
        </Grid>
        <Grid item xs={6}>
          <Multiple />
        </Grid>
        <Grid item xs={6}>
          <Customangle />
        </Grid>
        <Grid item xs={6}>
          <Gradient />
        </Grid>
        <Grid item xs={6}>
          <Stroked />
        </Grid>
        <Grid item xs={6}>
          <Semicircular />
        </Grid>
      </Grid>
    </>
  );
};

export default Radialbar;
