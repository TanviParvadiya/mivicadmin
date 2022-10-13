import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
const TotalSales = () => {
  return (
    <>
      <div className="analytotalsales">
        <div className="theme-box-shadow ">
          <div className="anycotbox">
            <div className="anycotboxicondes">
              <div className="to-ic">
                <BusinessCenterIcon />
              </div>
              <div className="descriptionofbox">
                <h4>28,000 USD</h4>

                <h5>Total Sales</h5>
              </div>
            </div>
            <div className="total-content">
              <QuestionMarkIcon />
              <p> +35% </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalSales;
