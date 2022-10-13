import React from "react";
import pro1 from "../../Image/product/1.jpg";
import pro2 from "../../Image/product/2.jpg";
import pro3 from "../../Image/product/3.jpg";
import pro4 from "../../Image/product/4.jpg";
import pro5 from "../../Image/product/5.jpg";
import pro6 from "../../Image/product/6.jpg";
import pro7 from "../../Image/product/7.jpg";
import pro8 from "../../Image/product/8.jpg";
const RecentOrder = () => {
  return (
    <>
      <div className="recentorder">
        <div className="theme-box-shadow">
          <h6 className="defultheading">Refferals</h6>
          <div className="">
            <table className="tableorder ordertable-hover">
              <thead>
                <tr>
                  <th scope="col">product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">customer</th>
                  <th scope="col">Product id</th>
                  <th scope="col">Rates</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <img src={pro1} alt="recent order" />
                  </th>
                  <td>nike sport shoes</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$99.00</td>
                  <td>354</td>
                  <td>
                    <span className="pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro2} alt="recent order" />
                  </th>
                  <td>Titan Watch</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$89.00</td>
                  <td>215</td>
                  <td>
                    <span className="processing">Processing</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro3} alt="recent order" />
                  </th>
                  <td>Head phone</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$99.00</td>
                  <td>350</td>
                  <td>
                    <span className="deliverd">Deliverd</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro4} alt="recent order" />
                  </th>
                  <td>kacket</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$49.00</td>
                  <td>300</td>
                  <td>
                    <span className="cancel">Cancel</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro5} alt="recent order" />
                  </th>
                  <td>nike sport shoes</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$99.00</td>
                  <td>354</td>
                  <td>
                    <span className="pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro6} alt="recent order" />
                  </th>
                  <td>Titan Watch</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$89.00</td>
                  <td>215</td>
                  <td>
                    <span className="processing">Processing</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro7} alt="recent order" />
                  </th>
                  <td>Head phone</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$99.00</td>
                  <td>350</td>
                  <td>
                    <span className="deliverd">Deliverd</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={pro8} alt="recent order" />
                  </th>
                  <td>kacket</td>
                  <td>john deo</td>
                  <td>#345985</td>
                  <td>$49.00</td>
                  <td>300</td>
                  <td>
                    <span className="deliverd">Deliverd</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
