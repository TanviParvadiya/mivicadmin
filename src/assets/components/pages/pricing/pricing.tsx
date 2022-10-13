import React from "react";
import Grid from "@mui/material/Grid";
import "./pricing.css";
import Datapricing from "./datapricing";
import CheckIcon from "@mui/icons-material/Check";
import separate from "../../../Image/separate.jpg";
const Pricing = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="theme-box-shadow">
            <h6 className="defultheading">Our Plans And Pricing</h6>
            <div className="pricing">
              <Grid container spacing={3}>
                {Datapricing.map((elm, index) => (
                  <Grid item xs={4} key={index}>
                    <div className="pricingcard">
                      <h2>{elm.mainheading}</h2>
                      <h3>{elm.price}</h3>
                      <h4>{elm.duration}</h4>
                      <img src={separate} alt="pricing" />
                      <ul>
                        <li>
                          <CheckIcon />
                          <p> {elm.f1}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f2}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f3}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f4}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f5}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f6}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f7}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f8}</p>
                        </li>
                        <li>
                          <CheckIcon />
                          <p> {elm.f9}</p>
                        </li>
                      </ul>
                      <button className="darkbluebtn">Buy Now</button>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
