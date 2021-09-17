import React from 'react'
import BarChart from './charts/barChart';
import PieChart from './charts/pieChart';
import RadarChart from './charts/radarChart';
import LineChart from './charts/lineChart';
import "../css/chartBoxes.css"

function Charts() {

    return(
        <div className="chartContainer">
            <div className="allCharts">
                <div className="leftSide">
                    <div className="chartsBox"> 
                        <BarChart/>
                    </div>

                    <div className="chartsBox"> 
                        <PieChart/>
                    </div>
                </div>

                <div className="rightSide">
                    <div className="chartsBox"> 
                        <RadarChart/>
                    </div>
                    <div className="chartsBox"> 
                        <LineChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charts;