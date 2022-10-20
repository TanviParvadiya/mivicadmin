import React from "react";
import Grid from "@mui/material/Grid";
import BasicBreadcrumbs from "./basic";
import CustomSeparator from "./customSeparator";
import IconBreadcrumbs from "./withIcon";
import CollapsedBreadcrumbs from "./collapsedBreadcrumbs";
import CustomizedBreadcrumbs from "./customization";

const Breadcrumbs = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <BasicBreadcrumbs/>
        </Grid>
        <Grid item xs={6}>
          <CustomSeparator/>
        </Grid> 
        <Grid item xs={6}>
          <IconBreadcrumbs/>  
        </Grid>
        <Grid item xs={6}>
          <CollapsedBreadcrumbs/>
        </Grid>
        <Grid item xs={6}>
          <CustomizedBreadcrumbs/>
        </Grid>
      </Grid>
    </>
  );
};

export default Breadcrumbs;
