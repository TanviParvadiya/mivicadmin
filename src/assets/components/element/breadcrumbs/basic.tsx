import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import BasicCC from "./basicCC";

export default function BasicBreadcrumbs() {
  return (
    <div className="theme-box-shadow">
      <h6 className="defultheading">Maximum value</h6>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link underline="hover" color="inherit" href="/elements/breadcrumb">
            Core
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/elements/breadcrumb"
            aria-current="page"
          >
            Breadcrumbs
          </Link>
        </Breadcrumbs>
      </div>
      <BasicCC />
    </div>
  );
}
