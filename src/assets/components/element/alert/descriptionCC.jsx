import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function DescriptionCC() {
  const democode = ` <Stack sx={{ width: "100%" }} spacing={2}>
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </Alert>
  <Alert severity="warning">
    <AlertTitle>Warning</AlertTitle>
    This is a warning alert — <strong>check it out!</strong>
  </Alert>
  <Alert severity="info">
    <AlertTitle>Info</AlertTitle>
    This is an info alert — <strong>check it out!</strong>
  </Alert>
  <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    This is a success alert — <strong>check it out!</strong>
  </Alert>
</Stack>`;

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
