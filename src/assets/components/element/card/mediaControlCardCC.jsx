import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function MediaControlCardCC() {
  const democode = ` <Card variant="outlined" sx={{ display: 'flex' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
       Classical Music for your event ever
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Mac Miller
      </Typography>
    </CardContent>
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <IconButton aria-label="previous">
        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
      </IconButton>
      <IconButton aria-label="play/pause">
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
      <IconButton aria-label="next">
        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
      </IconButton>
    </Box>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: 151 }}
    image={img1}
    alt="Live from space album cover"
  />
</Card>`;

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
