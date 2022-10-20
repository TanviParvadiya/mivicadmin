import React from "react";
import ReactApexChart from "react-apexcharts";
import MultipleCC from "./multipleCC";

class Multiple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  return 249;
                },
              },
            },
          },
        },
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
        colors: ["#f50f58", "#074baf", "#00bf48", "#ff6800"],
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">multiple radialbar chart</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
        <MultipleCC/>
      </div>
    );
  }
}
export default Multiple;
