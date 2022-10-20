import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function MultipleCC() {
  const democode = `constructor(props) {
    super(props);
    
    this.state = {
    series: [70],
    options: {
      chart: {constructor(props) {
        super(props);
    
        this.state = {
          series: [44, 55, 67, 83],
          options: {
            chart: {
              height: 350,
              type: "radialBar",
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: "22px",
                  },
                  value: {
                    fontSize: "16px",
                  },
                  total: {
                    show: true,
                    label: "Total",
                    formatter: function (w) {
                      return 249;
                    },
                  },
                },
              },
            },
            labels: ["Apples", "Oranges", "Bananas", "Berries"],
            colors: ["#f50f58", "#074baf", "#00bf48", "#ff6800"],
          },
        };
      }
      render() {
        return (
                        <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={350}
              />`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="App">
        <div className="code">
          <pre>
            <div className="copybtn">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(democode);
                }}
              >
                <CopyAllIcon />
              </button>
            </div>
            <code
              data-prismjs-copy="Copy the JavaScript snippet!"
              className="language-js"
            >
              {democode}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
