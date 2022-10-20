import React from "react";
import ReactApexChart from "react-apexcharts";
import BoxplotCC from "./boxplotCC";

class Boxplot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "box",
          type: "boxPlot",
          data: [
            {
              x: new Date("2017-01-01").getTime(),
              y: [54, 66, 69, 75, 88],
            },
            {
              x: new Date("2018-01-01").getTime(),
              y: [43, 65, 69, 76, 81],
            },
            {
              x: new Date("2019-01-01").getTime(),
              y: [31, 39, 45, 51, 59],
            },
            {
              x: new Date("2020-01-01").getTime(),
              y: [39, 46, 55, 65, 71],
            },
            {
              x: new Date("2021-01-01").getTime(),
              y: [29, 31, 35, 39, 44],
            },
          ],
        },
        {
          name: "outliers",
          type: "scatter",
          data: [
            {
              x: new Date("2017-01-01").getTime(),
              y: 32,
            },
            {
              x: new Date("2018-01-01").getTime(),
              y: 25,
            },
            {
              x: new Date("2019-01-01").getTime(),
              y: 64,
            },
            {
              x: new Date("2020-01-01").getTime(),
              y: 27,
            },
            {
              x: new Date("2020-01-01").getTime(),
              y: 78,
            },
            {
              x: new Date("2021-01-01").getTime(),
              y: 15,
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "boxPlot",
          height: 350,
        },
        stacked: false,
        toolbar: {
          show: false,
        },
        colors: ["#0A7029", "#DBA40E"],
        xaxis: {
          type: "datetime",
          tooltip: {
            formatter: function (val) {
              return new Date(val).getFullYear();
            },
          },
        },
        tooltip: {
          shared: false,
          intersect: true,
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: "#081f55",
              lower: "#d03b57",
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">Boxplot Scatter chart</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="boxPlot"
            height={350}
          />
        </div>
        <BoxplotCC />
      </div>
    );
  }
}
export default Boxplot;
