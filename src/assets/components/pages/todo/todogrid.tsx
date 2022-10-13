import React from "react";
import Grid from "@mui/material/Grid";
import ScheduleList from "./ScheduleList";
import IndexTodo from "./IndexTodo";

const Todogrid = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ScheduleList />
        </Grid>
        <Grid item xs={9}>
          <IndexTodo />
        </Grid>
      </Grid>
    </>
  );
};

export default Todogrid;
