import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import BadgeContentCC from "./badgeContentCC";

export default function ShowZeroBadge() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Show Zero Badge</h6>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" badgeContent={0}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
          <MailIcon />
        </Badge>
      </Stack>
      <BadgeContentCC/>
    </div>
  );
}
