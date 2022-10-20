import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function CustomSeparatorCC() {
  const democode = ` <Breadcrumbs maxItems={2} aria-label="breadcrumb">
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
</Breadcrumbs>`;

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
