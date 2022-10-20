import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function BasicCC() {
  const democode = ` <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="contained" disabled>
    Disabled
  </Button>
  <Button variant="contained" href="#contained-buttons">
    Link
  </Button>
  <Button color="secondary">Secondary</Button>
  <Button variant="contained" color="success">
    Success
  </Button>
  <Button variant="outlined" color="error">
    Error
  </Button>
  <Button variant="outlined" size="small">
    Small
  </Button>
  <Button variant="outlined" size="medium">
    Medium
  </Button>
  <Button variant="outlined" size="large">
    Large
  </Button>`;

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
