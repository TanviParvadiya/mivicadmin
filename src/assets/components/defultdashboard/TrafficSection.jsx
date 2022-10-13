import React, { Component } from "react";
import Chart from "react-apexcharts";

class Traffic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          type: "bar",
          width: "100%",
          height: 400,
        },
        colors: ["#367AE5", "#e04035", "#f0c045", "#1f965a"],
        xaxis: {
          categories: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60",
            border: 5,
            dataLabels: {
              position: "top",
            },
          },
        },
               stroke: {
          show: true,
          width: 0,
          colors: ["#000000"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },

        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "14px",
              colors: ["#000000"],
            },
          },
        },
      },

      series: [
        {
          name: "Social Media",
          data: [
            450, 382, 300, 333, 350, 210, 300, 102, 450, 210, 500, 500, 350,
            210, 450, 102, 450, 210, 410, 230,
          ],
        },
        {
          name: "Search",
          data: [
            350, 175, 190, 165, 450, 290, 250, 412, 459, 315, 200, 302, 115,
            310, 320, 102, 225, 219, 415, 445,
          ],
        },
        {
          name: "Email",
          data: [
            450, 210, 150, 365, 230, 147, 135, 102, 230, 115, 300, 202, 225,
            410, 260, 300, 325, 110, 412, 202,
          ],
        },
        {
          name: "Goole Adds",
          data: [
            360, 478, 455, 412, 219, 150, 278, 102, 122, 225, 400, 402, 369,
            119, 190, 102, 412, 310, 350, 325,
          ],
        },
      ],
    };
  }

  render() {
    return (
        <div className="theme-box-shadow">
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
          <h6 className="defultheading">Traffic Section</h6>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="400px"
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Traffic;
