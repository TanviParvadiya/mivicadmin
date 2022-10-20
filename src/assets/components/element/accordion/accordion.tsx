import React from "react";
import Grid from "@mui/material/Grid";
import BasicAccordion from "./basicAccordion";
import ControlledAccordions from "./controlledAccordion";
import Customization from "./customization";
import './accordion.css'
const Accordion = () => {
  return (
    <>
    <div className="accordion-main">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicAccordion />
        </Grid>
        <Grid item xs={12}>
            <ControlledAccordions/>
        </Grid>
        <Grid item xs={12}>
            <Customization/>
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Accordion;
