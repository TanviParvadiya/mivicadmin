import React from "react";
import DataCheckoutCard from "./DataProductGrid";
import Grid from "@mui/material/Grid";
import "./productgrid.css";
const ProductGrid = () => {
  return (
    <>
      <div className="theme-box-shadow ">
        <div className="productgrid">
          <Grid container spacing={3}>
            {DataCheckoutCard.map((elm, index) => (
              <Grid xs={3} key={index} item>
                <div className="progridcard">
                  <div className="pro_image cardeffect">
                    <img src={elm.image} alt="productgridcardimg" />
                    <div className="imghovereffect">
                      <img src={elm.images} alt="productgridcardimg" />
                    </div>
                  </div>
                  <div className="ratingstar">
                    {elm.star1}
                    {elm.star2}
                    {elm.star3}
                    {elm.star4}
                    {elm.star5}
                  </div>
                  <div className="progridcardbody">
                    <h3>{elm.name}</h3>
                    <div className="checkoutPrice">
                      <span className="currentPrice">${elm.price}</span>
                      <del>${elm.old}</del>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
