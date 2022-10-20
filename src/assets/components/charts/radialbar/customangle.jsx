import React from "react";

import ReactApexChart from "react-apexcharts";
import CustomangleCC from "./customangleCC";

class Customangle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [76, 67, 61, 90, 59],
      options: {
        chart: {
          height: 390,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#3b5a9a", "#00aef0", "#ffe500", "#5581a5", "#dd4c3a"],
        labels: ["Facebook ", "Twitter", "Snapchat", "LinkedIn", "pinterest"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">Custom Angle chart</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={390}
          />
        </div>
        <CustomangleCC/>
      </div>
    );
  }
}
export default Customangle;
