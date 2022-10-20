import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
export default function BoxplotCC() {
  const democode = `   constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "box",
          type: "boxPlot",
          data: [
            {
              x: new Date("2017-01-01").getTime(),
              y: [54, 66, 69, 75, 88],
            },
            {
              x: new Date("2018-01-01").getTime(),
              y: [43, 65, 69, 76, 81],
            },
            {
              x: new Date("2019-01-01").getTime(),
              y: [31, 39, 45, 51, 59],
            },
            {
              x: new Date("2020-01-01").getTime(),
              y: [39, 46, 55, 65, 71],
            },
            {
              x: new Date("2021-01-01").getTime(),
              y: [29, 31, 35, 39, 44],
            },
          ],
          
        },
        {
          name: "outliers",
          type: "scatter",
          data: [
            {
              x: new Date("2017-01-01").getTime(),
              y: 32,
            },
            {
              x: new Date("2018-01-01").getTime(),
              y: 25,
            },
            {
              x: new Date("2019-01-01").getTime(),
              y: 64,
            },
            {
              x: new Date("2020-01-01").getTime(),
              y: 27,
            },
            {
              x: new Date("2020-01-01").getTime(),
              y: 78,
            },
            {
              x: new Date("2021-01-01").getTime(),
              y: 15,
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "boxPlot",
          height: 350,
        },
        stacked: false,
          toolbar: {
            show: false,
          },
        colors: ["#0A7029", "#DBA40E"],
        xaxis: {
          type: "datetime",
          tooltip: {
            formatter: function (val) {
              return new Date(val).getFullYear();
            },
          },
        },
        tooltip: {
          shared: false,
          intersect: true,
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#081f55',
              lower: '#d03b57'
            }
          }
      }
      },
    };
  }

  render() {
    return (
     
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="boxPlot"
            height={350}
          />
       
    );
  }
}`;

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
