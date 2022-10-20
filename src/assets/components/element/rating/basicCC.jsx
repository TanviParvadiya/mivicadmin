import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function BasicCC() {
  const democode = `export default function BasicRating() {
    const [value, setValue] = React.useState<number | null>(2);
  
    return (
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={value} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
        </Box>
    );
  }  
  `;

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
