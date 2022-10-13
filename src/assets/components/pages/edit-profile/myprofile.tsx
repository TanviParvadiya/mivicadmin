import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import profile from "../../../Image/message/02.jpg";
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function Myprofile() {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="myprofile">
      <div className="theme-box-shadow">
        <h6 className="defultheading">My Profile</h6>
        <div className="profileimgname">
          <img src={profile} alt="productgridcardimg" />
          <div className="">
            <h5>Pretty lucky</h5>
            <h6>DESIGNER</h6>
          </div>
        </div>
        <div className="bio">
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <FormControl variant="standard" sx={{ m: 1, mt: 3 }}>
                <InputLabel htmlFor="standard-adornment-password">
                  Email Address
                </InputLabel>
                <Input
                  id="standard-adornment-weight"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
              <FormControl sx={{ m: 1, mt: 3 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, mt: 3 }}>
                <InputLabel htmlFor="standard-adornment-password">
                  Website
                </InputLabel>
                <Input
                  id="standard-adornment-weight"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </div>
            <button type="submit" className="darkbluebtn">
              Boost Store
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
}
