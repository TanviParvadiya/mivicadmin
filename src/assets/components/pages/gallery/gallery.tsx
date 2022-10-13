import React from "react";
import Grid from "@mui/material/Grid";
import DataGallery from "./datagallery";
import "./gallery.css"
const gallery = () => {
  return (
    <>
    <div className="gallery">
      <div className="theme-box-shadow">
        <h6 className="defultheading">
        Gallery
        </h6>
        <Grid container spacing={3}>
          {DataGallery.map((elm, index) => (
            <Grid xs={3} key={index} item>
              <img src={elm.img} alt="productgridcardimg" />
            </Grid>
          ))}
        </Grid>
      </div>
      </div>
    </>
  );
};

export default gallery;
