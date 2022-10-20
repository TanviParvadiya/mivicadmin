import React from "react";
import ReactApexChart from "react-apexcharts";

class Chartax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [95, 90, 85, 80, 75],
      options: {
        chart: {
          height: 300,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                  show: true,
                  label: 'TOTAL'
              }
          }
          },
        },
        legend: {
          show: true,
          fontSize: 14,
          fontweight: 900,
          position: 'bottom',
      },
      dataLabels: {
        show: true,
    },
        colors: ['#081f55', '#00c851', '#33b5e5', '#ffbb33', '#e04035'],
        labels: ['Revenue', 'Visitors', 'Purchase', 'Sales', 'Orders'],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="theme-box-shadow">
        <h4>Today's Info </h4>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={300}
       
        />
      </div>
    );
  }
}
export default Chartax;
