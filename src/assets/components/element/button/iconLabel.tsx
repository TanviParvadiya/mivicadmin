import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconLabelCC from "./iconLabelCC";

export default function IconLabelButtons() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Buttons with icons and label</h6>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <IconLabelCC/>
    </div>
  );
}
