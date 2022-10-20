import React from "react";
import Grid from "@mui/material/Grid";
import SimpleBadge from "./basic";
import BadgeVisibility from "./badgeVisibility";
import ShowZeroBadge from "./badgeContent";
import BadgeMax from "./maximumValue";

const Badges = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SimpleBadge />
        </Grid>
        <Grid item xs={6}>
          <BadgeVisibility />
        </Grid>
        <Grid item xs={6}>
          <ShowZeroBadge />
        </Grid>
        <Grid item xs={6}>
          <BadgeMax />
        </Grid>
      </Grid>
    </>
  );
};

export default Badges;
