import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
const TotalUser = () => {
  return (
    <>
      <div className="analytotaluser">
        <div className="theme-box-shadow ">
          <div className="anycotbox">
            <div className="anycotboxicondes">
              <div className="to-ic">
                <PeopleAltIcon />
              </div>
              <div className="descriptionofbox">
                <h4>35,000+</h4>

                <h5>Total User</h5>
              </div>
            </div>
            <div className="total-content">
              <QuestionMarkIcon />
              <p> +45% </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalUser;
