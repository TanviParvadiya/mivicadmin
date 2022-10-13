import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PieChartIcon from "@mui/icons-material/PieChart";
const TotalExpenses = () => {
  return (
    <>
      <div className="analytotalexpenses">
        <div className="theme-box-shadow ">
          <div className="anycotbox">
            <div className="anycotboxicondes">
              <div className="to-ic">
                <PieChartIcon />
              </div>
              <div className="descriptionofbox">
                <h4>25,000 USD</h4>

                <h5>Total Expenses</h5>
              </div>
            </div>
            <div className="total-content">
              <QuestionMarkIcon />
              <p> +15% </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalExpenses;
