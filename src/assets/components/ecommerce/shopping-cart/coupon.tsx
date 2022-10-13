import React from "react";

const Coupon = () => {
  return (
    <>
      <div className="cart-right-part">
        <h3 className="card-title">Have coupon?</h3>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="" type="button" id="button-addon2">
            Apply
          </button>
        </div>
        <h3 className="card-title">Cart Details</h3>
        <table className="table  cart-details">
          <tbody>
            <tr>
              <td className="">Sub Total</td>
              <td className="text-end ">$4,360</td>
            </tr>
            <tr>
              <td className="">Discount</td>
              <td className="text-end ">5%</td>
            </tr>
            <tr>
              <td className="">Shipping</td>
              <td className="text-end ">Free</td>
            </tr>
            <tr className="total">
              <td className=" ">Total</td>
              <td className="text-end  ">$3,976</td>
            </tr>
          </tbody>
        </table>
        <div className="cart-btn-transform">
          <a
            className=" "
            href="checkout.html"
          >
            check out
          </a>
        </div>
      </div>
    </>
  );
};

export default Coupon;
