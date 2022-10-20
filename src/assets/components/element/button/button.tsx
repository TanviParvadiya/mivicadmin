import React from "react";
import Grid from "@mui/material/Grid";
import BasicButtons from "./basic";
import UploadButtons from "./upload";
import IconLabelButtons from "./iconLabel";
import LoadingButtonsTransition from "./loading";
import IconButtonColors from "./iconbtn";

const Button = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicButtons/>
        </Grid>
        <Grid item xs={6}>
          <UploadButtons/>                                                                                         
        </Grid>
        <Grid item xs={6}>
          <IconLabelButtons/>
        </Grid>
        <Grid item xs={6}>
          <LoadingButtonsTransition/>
        </Grid>
        <Grid item xs={6}>
          <IconButtonColors/>
        </Grid>
      </Grid>
    </>
  );
};

export default Button;
