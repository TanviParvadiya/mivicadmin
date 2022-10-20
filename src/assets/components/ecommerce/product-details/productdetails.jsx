import { useState } from "react";
import Grid from "@mui/material/Grid";
import pro1 from "../../../Image/product/1.jpg";
import pro2 from "../../../Image/product/2.jpg";
import pro3 from "../../../Image/product/3.jpg";
import pro4 from "../../../Image/product/4.jpg";
import "./product-details.css";
import SellIcon from "@mui/icons-material/Sell";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Productdetails = () => {
  const [count, setCount] = useState(0);
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <>
      <div className="prodetails">
        <div className="theme-box-shadow">
          <h6 className="defultheading"> product details </h6>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <div className="prodetailmainimg">
                <img src={pro1} alt="product deatils" />
                <div>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <img src={pro1} alt="product deatils" />
                    </Grid>
                    <Grid item xs={3}>
                      <img src={pro2} alt="product deatils" />
                    </Grid>
                    <Grid item xs={3}>
                      <img src={pro3} alt="product deatils" />
                    </Grid>
                    <Grid item xs={3}>
                      <img src={pro4} alt="product deatils" />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="pro-details">
                <div className="text-muted">3SIX5</div>
                <h2>Kitchen Spices - Freash And Healthy</h2>
                <div className="text-success">Special price</div>
                <div className="dflex">
                  <h5>$500.00</h5>
                  <del> $800.00 </del>
                  <p>69% off</p>
                </div>
                <h6>Available offers</h6>
                <ul>
                  <li className="dflex flex-align-item-center">
                    <SellIcon />
                    <b>Special Price</b> Get extra 20% off (price inclusive of
                    discount)
                  </li>
                  <li className="dflex flex-align-item-center">
                    <SellIcon />
                    <b> Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis
                    Bank Credit Card
                  </li>
                  <li className="dflex flex-align-item-center">
                    <SellIcon />
                    <b>Special Price </b> Get extra 20% off (price inclusive of
                    discount)
                  </li>
                  <li className="dflex flex-align-item-center">
                    <SellIcon />
                    <b>Bank Offer </b> Flat ₹75 off on first Flipkart Pay Later
                    order of ₹500 and above
                  </li>
                </ul>
                <h3>SIZE:</h3>
                <div className="radio-toolbar">
                  <input type="radio" id="small" name="size" value="s" />
                  <label>S</label>

                  <input type="radio" id="medium" name="size" value="m" />
                  <label>M</label>

                  <input type="radio" id="large" name="size" value="l" />
                  <label>L</label>

                  <input type="radio" id="extralarge" name="size" value="xl" />
                  <label>XL</label>
                </div>

                <h3>SIZE:</h3>
                <div className="radio-toolbar">
                  <input
                    type="radio"
                    id="green"
                    name="color"
                    value="green"
                    onChange={(e) => {
                      console.log(e)
                    }}
                    checked={true}
                  />
                  <label className="bg-success">green</label>

                  <input type="radio" id="yellow" name="color" value="yellow" />
                  <label className="bg-warning">yellow</label>

                  <input type="radio" id="purple" name="color" value="purple" />
                  <label className="bg-purple">purple</label>

                  <input type="radio" id="pink" name="color" value="pink" />
                  <label className="bg-pink">pink</label>
                </div>
                <div className="sbtitle">
                  <p>
                    <b>Sku : </b>
                    5010
                  </p>
                </div>
                <div className="sbtitle">
                  <p>
                    <b>Availability : </b>1 in stock
                  </p>
                </div>
                <div className="shoppingcartdetails ">
                  <div className="incdec">
                    <span onClick={decrement}>
                      <RemoveIcon />
                    </span>
                    <p>{count}</p>
                    <span onClick={increment}>
                      <AddIcon />
                    </span>
                  </div>
                </div>
                <button className="darkbluebtn">Boost Store</button>
              </div>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
