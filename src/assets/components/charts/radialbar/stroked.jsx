import React from "react";
import ReactApexChart from "react-apexcharts";
class Stroked extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          offsetY: -10,
        },
        colors: ["#081f55"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 120,
              },
              value: {
                offsetY: 76,
                fontSize: "22px",
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
            
          },
        },
        stroke: {
          dashArray: 4,
        },
        labels: ["Median Ratio"],
      },
    };
  }

  render() {
    return (
        <div className="theme-box-shadow">
        <h6 className="defultheading">stroked circular gauge</h6>
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={350}
        />
      </div>
      </div>
    );
  }
}

export default Stroked;
