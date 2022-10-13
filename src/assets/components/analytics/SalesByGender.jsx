import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesByGender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stroke: {
        width: 0,
      },
      aspectRatio: 2,
      total: {
        show: true,
      },
      legend: {
        position: "bottom",
        show: false,
      },
      series: [45, 35, 20],
      options: {
        chart: {
          width: "100%",
          height: "250",
          type: "donut",
        },

        legend: {
          position: "bottom",
          show: false,
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
          active: {
            filter: {
              type: "none" /* none, lighten, darken */,
            },
          },
        },
        colors: ["#367ae5", "#dd443a", "#f9c80e"],
        labels: ["Mens", "Womens", "Others"],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="theme-box-shadow">
        <h6 className="defultheading">Sales By Gender</h6>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={250}
        />
        <div className="gender-details">
          <div className="dgrid">
            <div className="gendflex">
              <div className="genderdot"></div>
              <div className="gendername">Male</div>
            </div>
            <div className="gentercount ">25,347</div>
            <div className="genderpersntg">45%</div>
          </div>
          <div className="dgrid genderfemale">
            <div className="gendflex">
              <div className="genderdot"></div>
              <div className="gendername">Female</div>
            </div>
            <div className="gentercount ">20,250</div>
            <div className="genderpersntg">35%</div>
          </div>
          <div className="dgrid genderothers">
            <div className="gendflex">
              <div className="genderdot"></div>
              <div className="gendername">Others</div>
            </div>
            <div className="gentercount ">10,451</div>
            <div className="genderpersntg">20%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesByGender;
