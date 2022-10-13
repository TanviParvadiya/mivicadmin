import React from "react";
import ReactApexChart from "react-apexcharts";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
class Secschart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "chart2",
          data:  [15, 25, 15, 35, 30, 35, 15, 35, 5],
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
        colors: ["#c0c446"],
      },
    };
  }

  render() {
    return (
      <>
        <div className="section4smllchrt">
          <div className="theme-box-shadow section-smallchart">
            <div className="smlctsitx">
              <h5>Total Visitor</h5>
              <h2>700+</h2>
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
                58%
                <ArrowDropUpIcon />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Secschart;
