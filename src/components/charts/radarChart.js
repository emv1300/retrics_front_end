import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {

    function rngPrice(min, max){
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    function avgPrice(a, b){
        return ((a+b)/2).toFixed(2);
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

    const dPriveGrowth1 = dTprice - dprice;
    const dPriveGrowth2 = dOprice - dTprice;

    const ePriceGrowth1 =  eTprice - eprice;
    const ePriceGrowth2 =  eoprice - eTprice;

    const rPriveGrowth1 = rTprice - rprice;
    const rPriveGrowth2 = rOprice - rTprice;

    const dAvgP = avgPrice(dPriveGrowth1, dPriveGrowth2);
    const eAvgP = avgPrice(ePriceGrowth1, ePriceGrowth2);
    const rAvgP = avgPrice(rPriveGrowth1, rPriveGrowth2);

  return (
    <div >
      <Radar
        data={{
          labels: ["Diamond", "Emerald", "Ruby"],
          datasets: [
            {
              label: "average price increase of gems from day to day",
              data: [dAvgP, eAvgP, rAvgP],
              backgroundColor: "rgba(54, 162, 235, 0.5)"
              
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
export default RadarChart;
