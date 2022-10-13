import React from "react";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import Prism from "prismjs";
import ReactApexChart from "react-apexcharts";
import Codae from "./basicradialCC";
import BasicradialCC from "./basicradialCC";
class Basicradial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        colors: ["#081f55"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: ["Cricket"],
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <h6 className="defultheading">basic radialbar chart</h6>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
        <BasicradialCC />
      </div>
    );
  }
}

export default Basicradial;
