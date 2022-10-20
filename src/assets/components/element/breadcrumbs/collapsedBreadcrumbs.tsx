/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CustomSeparatorCC from "./collapsedBreadcrumbsCC";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CollapsedBreadcrumbs() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Custom Separator</h6>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Catalog
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Accessories
          </Link>
          <Link underline="hover" color="inherit" href="#">
            New Collection
          </Link>
          <Typography color="text.primary">Belts</Typography>
        </Breadcrumbs>
      </div>
      <CustomSeparatorCC/>
    </div>
  );
}
