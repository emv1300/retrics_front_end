import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {

    function rngPrice(min, max){
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    let dprice = parseInt(localStorage.getItem('diamond'));
    let dTprice = dprice + parseInt(rngPrice(10,25));
    let eprice = parseInt(localStorage.getItem('emerald'));
    let eTprice = eprice + parseInt(rngPrice(8,15));
    let rprice = parseInt(localStorage.getItem('ruby'));
    let rTprice = rprice + parseInt(rngPrice(3,9));


  return (
    <div className="barChart">
      <Bar
        data={{
          labels: ["Diamond", "Ruby", "Emerald"],
          datasets: [
            {
              label: "current prices",
              data: [dprice, rprice, eprice],
              backgroundColor: [
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(80, 200, 120, 0.5)"
              ]
            },
            {
              label: "next day estimation",
              data: [dTprice, rTprice, eTprice],
              backgroundColor: "rgb(95, 95, 95, 0.2)"
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
export default BarChart;
