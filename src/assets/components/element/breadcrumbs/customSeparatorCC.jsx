import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function CustomSeparatorCC() {
  const democode = `function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  
  export default function CustomSeparator() {
    const breadcrumbs = [
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        onClick={handleClick}
      >
        MUI
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
      >
        Core
      </Link>,
      <Typography key="3" color="text.primary">
        Breadcrumb
      </Typography>,
    ];
  
    return (
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <CustomSeparatorCC/>
    );
  }`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="App">
        <div className="code">
          <pre>
            <div className="copybtn">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(democode);
                }}
              >
                <CopyAllIcon />
              </button>
            </div>
            <code
              data-prismjs-copy="Copy the JavaScript snippet!"
              className="language-js"
            >
              {democode}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
