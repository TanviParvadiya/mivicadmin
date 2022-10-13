import React from "react";
import Grid from "@mui/material/Grid";
import Shoppingcartdetails from "./shoppingcartdetails";
import "./shoppingcart.css";
import Coupon from "./coupon";
const Shoppingcart = () => {
  return (
    <>
      <div className="shoppingcart">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div className="theme-box-shadow ">
              <Shoppingcartdetails />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="theme-box-shadow ">
              <Coupon />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Shoppingcart;
