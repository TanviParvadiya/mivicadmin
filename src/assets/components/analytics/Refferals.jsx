import React from "react";
import ReactApexChart from "react-apexcharts";

class Refferals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67, 84, 97, 61],
      options: {
        chart: {
          height: 295,
          type: "radialBar",
        },
        colors: ["#367AE5", "#1CCEF4", "#1F965A", "#F9C80E"],
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: "TOTAL",
              },
            },
          },
        },
        legend: {
          show: true,
          position: "bottom",
        },
        dataLabels: {
          show: true,
        },
        labels: ["Facebook", "Instagram", "Whatsapp", "Other"],
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">Refferals</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={295}
          />
        </div>
      </div>
    );
  }
}
export default Refferals;
