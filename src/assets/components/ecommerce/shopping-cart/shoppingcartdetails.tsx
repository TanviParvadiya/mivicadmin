import { useState } from "react";
import pro1 from "../../../Image/product/1.jpg";
import pro2 from "../../../Image/product/2.jpg";
import pro3 from "../../../Image/product/3.jpg";
import pro4 from "../../../Image/product/4.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Shoppingcartdetails = () => {
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
      <div className="shoppingcartdetails recentorder">
        <h6 className="defultheading">Shopping Cart</h6>
        <div className="">
          <table className="tableorder ordertable-hover">
            <thead>
              <tr>
                <th scope="col">product</th>
                <th scope="col">Product Title </th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img src={pro1} alt="pro1" />
                </th>
                <td>nike sport shoes</td>
                <td>john deo</td>

                <td className="incdec">
                  <span onClick={decrement}>
                    <RemoveIcon />
                  </span>
                  <p>{count}</p>
                  <span onClick={increment}>
                    <AddIcon />
                  </span>
                </td>
                <td className="fvdlticon">
                  <FavoriteBorderIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={pro2} alt="pro2" />
                </th>
                <td>nike sport shoes</td>
                <td>john deo</td>

                <td className="incdec">
                  <span onClick={decrement}>
                    <RemoveIcon />
                  </span>
                  <p>{count}</p>
                  <span onClick={increment}>
                    <AddIcon />
                  </span>
                </td>
                <td className="fvdlticon">
                  <FavoriteBorderIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={pro3} alt="prop3" />
                </th>
                <td>nike sport shoes</td>
                <td>john deo</td>

                <td className="incdec">
                  <span onClick={decrement}>
                    <RemoveIcon />
                  </span>
                  <p>{count}</p>
                  <span onClick={increment}>
                    <AddIcon />
                  </span>
                </td>
                <td className="fvdlticon">
                  <FavoriteBorderIcon />
                  <DeleteOutlineIcon />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img src={pro4}  alt="pro4"/>
                </th>
                <td>nike sport shoes</td>
                <td>john deo</td>

                <td className="incdec">
                  <span onClick={decrement}>
                    <RemoveIcon />
                  </span>
                  <p>{count}</p>
                  <span onClick={increment}>
                    <AddIcon />
                  </span>
                </td>
                <td className="fvdlticon">
                  <FavoriteBorderIcon />
                  <DeleteOutlineIcon /> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Shoppingcartdetails;
