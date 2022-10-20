import React from "react";
import ReactApexChart from "react-apexcharts";
import DatalabelCC from "./datalabelCC";

class Datalabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Visits",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Sales",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#081f55", "#d03b57"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        grid: {
          borderColor: "#e5e5e5",
          row: {
            colors: ["#f1f1f1", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }

  render() {
    return (
        <div className="theme-box-shadow">
        <h6 className="defultheading">Data label chart</h6>
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
      <DatalabelCC/>
      </div>
    );
  }
}
export default Datalabel;
