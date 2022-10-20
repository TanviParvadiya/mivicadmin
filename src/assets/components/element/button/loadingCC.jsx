import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function LoadingCC() {
  const democode = `export default function LoadingButtonsTransition() {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }
  
    return (
        <Box>
          <FormControlLabel
            sx={{
              display: "block",
            }}
            control={
              <Switch
                checked={loading}
                onChange={() => setLoading(!loading)}
                name="loading"
                color="primary"
              />
            }
            label="Loading"
          />
          <Box sx={{ "& > button": { m: 1 } }}>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              variant="outlined"
              disabled
            >
              disabled
            </LoadingButton>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingIndicator="Loading…"
              variant="outlined"
            >
              Fetch data
            </LoadingButton>
            <LoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </LoadingButton>
            <LoadingButton
              color="secondary"
              onClick={handleClick}
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
            >
              Save
            </LoadingButton>
          </Box>
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
