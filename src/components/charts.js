import React from 'react'
import "../css/chartsBoxes.css"

function Charts() {

    return(
        <div className="chartContainer">
            <div className="allCharts">
                <div className="leftSide">
                    <p className="chartsBox"> Bar charts horizontal </p>

                    <p className="chartsBox"> Bar charts vertical </p>

                    <p className="chartsBox"> Radar charts </p>
                </div>

                <div className="rightSide">
                    <p className="chartsBox"> Line charts </p>

                    <p className="chartsBox"> Pie charts </p>

                    <p className="chartsBox"> Line charts </p>
                </div>
            </div>
        </div>
    );
}

export default Charts;