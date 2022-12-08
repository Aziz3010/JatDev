import React, { useEffect, useState } from 'react';
import "./StackedChart.css";
import StackedAreaChart from "../../Charts/StackedAreaChart";
import { ChartData } from "../../Assets/Data/Data";

const StackedChart = () => {
    const [daily, setDaily] = useState(false);
    const [weekly, setWeekly] = useState(false);
    const [monthly, setMonthly] = useState(true);
    const [data, setData] = useState([]);

    const handleTabs = (e) => {
        switch (e.target.innerHTML) {
            case "daily":
                setDaily(true);
                setWeekly(false);
                setMonthly(false);
                setData(ChartData[0].Daily);
                break;
            case "weekly":
                setDaily(false);
                setWeekly(true);
                setMonthly(false);
                setData(ChartData[1].Weekly);
                break;
            case "monthly":
                setDaily(false);
                setWeekly(false);
                setMonthly(true);
                setData(ChartData[2].Monthly);
                break;
            default:
                setDaily(false);
                setWeekly(false);
                setMonthly(true);
                setData(ChartData[2].Monthly);
                break;
        }
    };

    useEffect(()=>{
        setData(ChartData[2].Monthly);
    },[]);

    return (
        <div className="chart">
            <div className="heading">
                <h2>task done</h2>
                <div className="tabs">
                    <h3 onClick={(e) => { handleTabs(e) }} className={daily ? "active" : ''} >daily</h3>
                    <h3 onClick={(e) => { handleTabs(e) }} className={weekly ? "active" : ''}>weekly</h3>
                    <h3 onClick={(e) => { handleTabs(e) }} className={monthly ? "active" : ''}>monthly</h3>
                </div>
            </div>
            <StackedAreaChart data={data} />
        </div>
    )
}

export default StackedChart;