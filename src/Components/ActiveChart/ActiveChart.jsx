import React from 'react';
import "./ActiveChart.css";
import TinyBarChart from "../../Charts/TinyBarChart";
import {TinyBarChartData} from "../../Assets/Data/Data";

const ActiveChart = () => {
    return (
        <div className="right activeChart">
            <h4>activity chart</h4>
            <div className="tinyChart">
                <TinyBarChart TinyBarChartData={TinyBarChartData}/>
            </div>
        </div>
    )
}

export default ActiveChart;