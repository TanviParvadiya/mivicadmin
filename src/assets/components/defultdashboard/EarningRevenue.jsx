import React from "react";
import ReactApexChart from "react-apexcharts";
class SplineArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Complete",
          data: [50, 43, 44, 50, 46, 39, 50],
        },
      ],

      options: {
        chart: {
          height: "270",
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "14px",
              colors: ["#081F55"],
            },
          },
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: {
            style: {
              fontSize: "14px",
              colors: ["#081F55"],
            },
          },
        },
        fill: {
          colors: ["#4256c4"],
        },
        colors: ["#4256c4"],
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <div id="chart">
        <h6 className="defultheading">Earning Revenue</h6>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    );
  }
}

export default SplineArea;
