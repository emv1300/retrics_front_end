import React from 'react'
import "../css/chartBoxes.css"

function Charts() {

    return(
        <div className="chartContainer">
            <div className="allCharts">
                <div className="leftSide">
                    <p className="chartsBox"> Bar charts </p>

                    <p className="chartsBox"> Radar charts </p>
                </div>

                <div className="rightSide">
                    <p className="chartsBox"> Line charts </p>

                    <p className="chartsBox"> Pie charts </p>
                </div>
            </div>
        </div>
    );
}

export default Charts;