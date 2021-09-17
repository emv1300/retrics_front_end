import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {

    let dprice = parseInt(localStorage.getItem('diamond'));
    let eprice = parseInt(localStorage.getItem('emerald'));
    let rprice = parseInt(localStorage.getItem('ruby'));


  return (
    <div >
      <Pie
        data={{
          labels: ["Diamond", "Ruby", "Emerald"],
          datasets: [
            {
              data: [dprice, rprice, eprice],
              backgroundColor: [
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(80, 200, 120, 0.5)"
              ]
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
export default PieChart;
