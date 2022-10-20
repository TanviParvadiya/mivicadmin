import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function MaximumValueCC() {
  const democode = ` <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
  <Badge color="secondary" badgeContent={99}>
    <MailIcon />
  </Badge>
  <Badge color="secondary" badgeContent={100}>
    <MailIcon />
  </Badge>
  <Badge color="secondary" badgeContent={1000} max={999}>
    <MailIcon />
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
