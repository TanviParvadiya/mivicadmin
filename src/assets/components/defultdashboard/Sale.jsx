import React from "react";
import ReactApexChart from "react-apexcharts";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
class Secfochart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "chart3",
          data: [5, 10, 30, 25, 40, 30, 20, 10, 30],
        },
      ],

      options: {
        chart: {
          width: "100px",
          height: 40,
          sparkline: {
            enabled: !0,
          },
          type: "line",
          toolbar: {
            show: false,
          },
          colors: ["#ff0000"],
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: !1,
          },
          x: {
            show: !1,
          },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: {
            show: !1,
          },
        },
        fill: {
          colors: ["#ffffff"],
        },
        colors: ["#D03B57"],
      },
    };
  }

  render() {
    return (
      <>
        <div className="section6smllchrt">
          <div className="theme-box-shadow section-smallchart">
            <div className="smlctsitx">
              <h5>Total Sale</h5>
              <h2>$230</h2>
            </div>
            <div id="chart" className="smchartright">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="area"
                height={40}
                width={100}
              />
              <span className="">
                33%
                <ArrowDropUpIcon />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Secfochart;
