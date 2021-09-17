import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {

    function rngPrice(min, max){
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    let dprice = parseInt(localStorage.getItem('diamond'));
    let dTprice = dprice + parseInt(rngPrice(10,25));
    let dOprice = dTprice + parseInt(rngPrice(10,25));
    let eprice = parseInt(localStorage.getItem('emerald'));
    let eTprice = eprice + parseInt(rngPrice(8,15));
    let eoprice = eTprice + parseInt(rngPrice(8,15));
    let rprice = parseInt(localStorage.getItem('ruby'));
    let rTprice = rprice + parseInt(rngPrice(3,9));
    let rOprice = rTprice + parseInt(rngPrice(3,9));

  return (
    <div >
      <Line
        data={{
          labels: ["Today", "Tomorrow", "Overmorrow"],
          datasets: [
            {
              label: "Diamond",
              data: [dprice, dTprice, dOprice],
              backgroundColor: "rgba(54, 162, 235, 0.5)"
              
            },
            {
              label: "Ruby",
              data: [rprice, rTprice, rOprice],
              backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
              label: "Emerald",
              data: [eprice, eTprice, eoprice],
              backgroundColor:"rgba(80, 200, 120, 0.5)"
            }
          ]
        }}
        height={300}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};
export default LineChart;
