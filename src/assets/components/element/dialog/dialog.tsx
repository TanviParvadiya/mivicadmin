import React from "react";
import Grid from "@mui/material/Grid";
import SimpleDialogDemo from "./basic";
import AlertDialog from "./alerts";
import FormDialog from "./formDialogs";
import FullScreenDialog from "./fullscreen";

const Dialog = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SimpleDialogDemo />
        </Grid>
        <Grid item xs={6}>
          <AlertDialog />
        </Grid>
        <Grid item xs={6}>
          <FormDialog />
        </Grid>
        <Grid item xs={6}>
          <FullScreenDialog />
        </Grid>
      </Grid>
    </>
  );
};

export default Dialog;
