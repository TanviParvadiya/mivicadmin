import React from "react";
import flag1 from "../../Image/fleg/india.png";
import flag2 from "../../Image/fleg/australia.png";
import flag3 from "../../Image/fleg/canada.png";
import flag4 from "../../Image/fleg/dubai.png";
import flag5 from "../../Image/fleg/italy.png";
import flag6 from "../../Image/fleg/spain.png";
import flag7 from "../../Image/fleg/usa.png";
const TopCountries = () => {
  return (
    <>
      <div className="topcountries">
        <div className="theme-box-shadow">
          <h6 className="defultheading">Your Top Countries</h6>
          <p>Sales Performance Revenue Based By Country</p>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag1} alt="top countries" />
              <span>India</span>
            </div>
            <p>$10000</p>
          </div>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag2} alt="top countries" />
              <span>Australia</span>
            </div>
            <p>$8000</p>
          </div>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag3} alt="top countries" />
              <span>Canada</span>
            </div>
            <p>$10000</p>
          </div>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag4} alt="top countries" />
              <span>Dubai</span>
            </div>
            <p>$30000</p>
          </div>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag5} alt="top countries" />
              <span>Italy</span>
            </div>
            <p>$2500</p>
          </div>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag6} alt="top countries" />
              <span>Spain</span>
            </div>
            <p>$12000</p>
          </div>
          <div className="pertitopcont">
            <div className="flagimgname">
              <img src={flag7} alt="top countries" />
              <span>Usa</span>
            </div>
            <p>$72000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCountries;
