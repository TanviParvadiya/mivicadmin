import React from "react";
import ReactApexChart from "react-apexcharts";

class DailyRevenue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Profit",
          data: [-44, 55, 41, 67, -22, 43, -25, 45, 35, 30],
        },
        {
          name: "Lost",
          data: [13, 23, -20, 8, 13, 27, 25, 14, 25, -30],
        },
      ],

      options: {
        colors: ["#367AE5", "#F9C80E"],
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "12",
            borderRadius: 5,
            border: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "14px",
              colors: ["#081F55"],
            },
          },
        },
        xaxis: {
          categories: [
            "Nov 01",
            "Nov 02",
            "Nov 03",
            "Nov 04",
            "Nov 05",
            "Nov 06",
            "Nov 07",
            "Nov 08", 
            "Nov 09",
            "Nov 10",
          ],
          labels: {
            style: {
              fontSize: "14px",
              colors: ["#081F55"],
            },
          },
        },
        legend: {
          position: "bottom",
          fontSize: "14px",
          color: "#081F55",
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div className="userage">
        <div className="theme-box-shadow">
          <h6 className="defultheading">Daily Revenue</h6>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DailyRevenue;
