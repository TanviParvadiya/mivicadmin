import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function OutlinedCC() {
  const democode = ` <Stack sx={{ width: '100%' }} spacing={2}>
  <Alert variant="outlined" severity="error">
    This is an error alert — check it out!
  </Alert>
  <Alert variant="outlined" severity="warning">
    This is a warning alert — check it out!
  </Alert>
  <Alert variant="outlined" severity="info">
    This is an info alert — check it out!
  </Alert>
  <Alert variant="outlined" severity="success">
    This is a success alert — check it out!
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
