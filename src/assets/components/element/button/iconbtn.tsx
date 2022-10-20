import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconbtnCC from './iconbtnCC';

export default function IconButtonColors() {
  return (
    <div className="theme-box-shadow">
    <h6 className="defultheading">Icon button</h6>
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
    <IconbtnCC/>
    </div>
  );
}
