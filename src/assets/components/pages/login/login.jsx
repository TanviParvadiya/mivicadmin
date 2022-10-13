import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { validatorLogin } from "./ValidatorLogin";
import { useNavigate } from "react-router-dom";

import useForm from "./useForm";
const useStyles = makeStyles((theme) => ({
  papper: {
    padding: "20px",
    width: "40vh",
    height: "50vh",
  },
}));

export default function App() {
  const nav = useNavigate();

  const initState = {
    email: "demo@demo.com",
    password: "demo@demo.com",
  };

  const submit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(initState));
    nav("/dashboard/deafult");
    window.location.reload();
  };

  const { handleChange, handleSubmit, handleBlur, state, errors } = useForm({
    initState,
    callback: submit,
    validatorLogin,
  });

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== "undefined")
      .length === 0;

  const { papper } = useStyles();
  return (
    <div className="login">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Paper className={papper} elevation={4} square={false}>
          <form onSubmit={handleSubmit}>
            <div>
              {/* EMAIL */}
              <TextField
                required
                label="Email"
                name="email"
                className="loginfield"
                defaultValue={state.email}
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                onBlur={handleBlur}
              />
              <br />
              {/* PASSWORD */}
              <TextField
                required
                label="Password"
                name="password"
                type="password"
                className="loginfield"
                defaultValue={state.password}
                onChange={handleChange}
                error={errors.password ? true : false}
                helperText={errors.password}
                onBlur={handleBlur}
              />
            </div>
            {/* PHONENUMBER */}
            {/* <div className="loginfield">
                <PhoneNumber
                  errors={errors}
                  state={state}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  countryCode={countryCode}
                />
              </div> */}
            <div>
              <Button
                disabled={!isValidForm}
                onClick={submit}
                type="submit"
                variant="contained"
                color="primary"
                className="loginfield"
              >
                Next
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
