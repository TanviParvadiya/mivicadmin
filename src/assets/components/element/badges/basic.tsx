import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Stack from "@mui/material/Stack";
import BasicCC from "./basicCC";

export default function SimpleBadge() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Simple Badge</h6>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
      </Stack>
      <BasicCC/>
    </div>
  );
}
