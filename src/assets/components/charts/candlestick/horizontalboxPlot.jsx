import React from "react";
import ReactApexChart from "react-apexcharts";
import HorizontalboxplotCC from "./horizontalboxplotCC";

class HorizontalboxPlot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: "Iceland",
              y: [54, 66, 69, 75, 88],
            },
            {
              x: "USA ",
              y: [43, 65, 69, 76, 81],
            },
            {
              x: " Taiwan",
              y: [31, 39, 45, 51, 59],
            },
            {
              x: "Jamaica ",
              y: [39, 46, 55, 65, 71],
            },
            {
              x: "Mexico ",
              y: [29, 31, 35, 39, 44],
            },
            {
              x: "China ",
              y: [41, 49, 58, 61, 67],
            },
            {
              x: "Sierra Leone ",
              y: [54, 59, 66, 71, 88],
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "boxPlot",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "50%",
          },
          boxPlot: {
            colors: {
              upper: "#e6e9f8",
              lower: "#f8f9fa",
            },
          },
        },
        stroke: {
          colors: ["#081f55"],
        },
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">Horizontal boxPlot chart</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="boxPlot"
            height={350}
          />
        </div>
        <HorizontalboxplotCC />
      </div>
    );
  }
}
export default HorizontalboxPlot;
