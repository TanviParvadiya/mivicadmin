import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ActionCC from "./actionsCC";

export default function ActionAlerts() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Action Alert</h6>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
    <ActionCC/>
    </div>
  );
}
