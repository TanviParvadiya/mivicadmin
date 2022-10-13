import React from "react";
import ReactApexChart from "react-apexcharts";

class UserAge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: "category A",
              y: 10,
              fillColor: "#F9C80E",
            },
            {
              x: "category B",
              y: 18,
              fillColor: "#E04035",
            },
            {
              x: "category C",
              y: 13,
              fillColor: "#377BE5",
            },
            {
              x: "category C",
              y: 13,
              fillColor: "#1F965A",
            },
            {
              x: "category C",
              y: 13,
              fillColor: "#1CCEF4",
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 250,
        },
        toolbar: {
          show: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            height: 5,
            columnWidth: "70%",
            barHeight: "15%",
            dataLabels: {
              position: "top",
            },
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        legend: {
          fontSize: "16px",
          color: "#081F55",
        },
        stroke: {
          show: true,
          width: 0,
          colors: ["#fff"],
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["05-10", "10-20", "20-30", "30-40", "40-50"],

          labels: {
            show: false,
            style: {
              fontSize: "16px",
              colors: ["#081F55"],
            },
          },
        },
        grid: {
          show: false,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="userage">
        <div className="theme-box-shadow">
          <h6 className="defultheading">User Age's</h6>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={250}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserAge;
