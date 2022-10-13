import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function BasicradialCC() {
  const democode = `const Line = () => {
        return (
          <>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Gradient />
              </Grid>
              <Grid item xs={6}>
                <Brush />
              </Grid>
              <Grid item xs={6}>
                h
              </Grid>
              <Grid item xs={6}>
                h
              </Grid>
              <Grid item xs={6}>
                j
              </Grid>
              <Grid item xs={6}>
                y
              </Grid>
            </Grid>
          </>
        );
      };
      
      export default Line;`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="App">
        <div className="Code">
          <pre>
            <code
              data-prismjs-copy="Copy the JavaScript snippet!"
              className="language-js"
            >
              {democode}
            </code>
          </pre>

          <div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(democode);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
