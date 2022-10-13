import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [50, 60, 50, 75, 75, 70, 75, 95, 85, 95, 100],
        },
        {
          name: "Orders",
          data: [15, 35, 25, 55, 65, 45, 55, 45, 85, 65, 85],
        },
      ],
      options: {
        chart: {
          height: 320,
          type: "line",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        colors: ["#1F965A", "#A4CD3C"],
        stroke: {
          width: [2, 2],
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },

        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "#eeeeee",
          },
          labels: {
            style: {
              colors: "#081F55",
              fontSize: 14,
            },
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#eeeeee",
            },
            labels: {
              style: {
                colors: "#081F55",
                fontSize: 14,
              },
            },
          },
        ],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false,
          },
        },
        legend: {
          horizontalAlign: "right",
          position: "top",
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <div className="theme-box-shadow">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    );
  }
}

export default SalesOverview;
