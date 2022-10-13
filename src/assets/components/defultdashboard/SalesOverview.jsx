import React from "react";
import ReactApexChart from "react-apexcharts";

class Donut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        stroke: {
            width: 0
        },
        aspectRatio: 1.4,
        total: {
            show: true,
        },
        legend: {
            position: 'bottom'
        },
        series: [50, 50, 19, 50],
      options: {
        chart: {
          width: "100%",
          height: "350",
          type: "donut",
        },
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
          fontSize: 14,
          fontweight: 900,
          position: "bottom",
        },
        dataLabels: {
            enabled: false
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            },
            active: {
                filter: {
                    type: 'none' /* none, lighten, darken */
                }
            },
        },
        colors: ["#43BCCD", "#F9C80E", "#662E9B", "#F86624"],
        labels: ["Ordered", "Deliverd", "Arrived", "Reported"],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="theme-box-shadow">
        <h6 className="defultheading">Sales Overview </h6>
        <ReactApexChart
          options={this.state.options}  
          series={this.state.series}
          type="donut"
          height={400}
        />
       
      </div>
    );
  }
}
export default Donut;
