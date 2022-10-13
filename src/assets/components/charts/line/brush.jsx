import React from "react";

import ReactApexChart from "react-apexcharts";

class Brush extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      options: {
        chart: {
          id: "chart2",
          type: "line",
          height: 230,
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#546E7A"],
        stroke: {
          width: 3,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
      },

      seriesLine: [
        {
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      optionsLine: {
        chart: {
          id: "chart1",
          height: 130,
          type: "area",
          brush: {
            target: "chart2",
            enabled: true,
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date("19 Jun 2017").getTime(),
              max: new Date("14 Aug 2017").getTime(),
            },
          },
        },
        colors: ["#ff0000"],
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          },
        },
        xaxis: {
          type: "datetime",
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          tickAmount: 2,
        },
      },
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div id="chart-line2">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={230}
          />
        </div>
        <div id="chart-line">
          <ReactApexChart
            options={this.state.optionsLine}
            series={this.state.seriesLine}
            type="area"
            height={130}
          />
        </div>
      </div>
    );
  }
}
export default Brush;
