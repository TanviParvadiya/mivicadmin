import React from "react";
import Grid from "@mui/material/Grid";
import Myprofile from "./myprofile";
import "./editprofile.css";
import Subeditprofile from "./subeditprofile";

const Editprofile = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Myprofile />
        </Grid>
        <Grid item xs={8}>
          <Subeditprofile />
        </Grid>
      </Grid>
    </>
  );
};

export default Editprofile;
