import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BasicCC from "./basicCC";

export default function BasicButtons() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Basic button</h6>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Stack>
      <BasicCC/>
    </div>
  );
}
