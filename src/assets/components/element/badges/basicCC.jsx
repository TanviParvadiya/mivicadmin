import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function BasicCC() {
  const democode = ` <Stack spacing={2} direction="row">
  <Badge badgeContent={4} color="secondary">
    <MailIcon color="action" />
  </Badge>
  <Badge badgeContent={4} color="success">
    <MailIcon color="action" />
  </Badge>
  <Badge badgeContent={4} color="primary">
    <MailIcon color="action" />
  </Badge>
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
