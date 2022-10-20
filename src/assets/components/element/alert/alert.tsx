import React from "react";
import Grid from "@mui/material/Grid";
import BasicAlerts from "./basicAlerts";
import DescriptionAlerts from "./description";
import ActionAlerts from "./actions";
import TransitionAlerts from "./transition";
import Outlined from "./outlined";
import Filled from "./filled";

const Alert = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicAlerts />
        </Grid>
        <Grid item xs={12}>
          <DescriptionAlerts />
        </Grid>
        <Grid item xs={12}>
          <ActionAlerts />
        </Grid>
        <Grid item xs={12}>
          <TransitionAlerts />
        </Grid>
        <Grid item xs={12}>
          <Outlined />
        </Grid>
        <Grid item xs={12}>
          <Filled />
        </Grid>
      </Grid>
    </>
  );
};

export default Alert;
