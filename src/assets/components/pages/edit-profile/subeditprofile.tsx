import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Subeditprofile = () => {
  return (
    <>
      <div className="subeditprofile">
        <div className="theme-box-shadow input-padding">
          <h6 className="defultheading">Edit Profile</h6>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            className="subeditprofield"
          >
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="Company"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="Email address"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Address"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="Postal Code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="Country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="About Me"
                  variant="standard"
                  minRows={3}
                />
                <button type="submit" className="darkbluebtn">
                  Boost Store
                </button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Subeditprofile;
