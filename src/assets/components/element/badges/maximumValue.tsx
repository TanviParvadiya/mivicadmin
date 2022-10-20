import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import MaximumValueCC from "./maximumValueCC";

export default function BadgeMax() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Maximum value</h6>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" badgeContent={99}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={100}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999}>
          <MailIcon />
        </Badge>
      </Stack>
      <MaximumValueCC/>
    </div>
  );
}
