import React from "react";
import ReactApexChart from "react-apexcharts";
import SteplineCC from "./steplineCC";
class Stepline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 350,
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        colors: ["#2247b7"],
        stroke: {
          curve: "stepline",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          align: "left",
        },
        markers: {
          hover: {
            sizeOffset: 4,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">Stepline chart</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
        <SteplineCC />
      </div>
    );
  }
}
export default Stepline;

