import React from 'react';
import StorageBrogress from '../StorageBrogress/StorageBrogress';
import "./Storage.css";
import { StorageBrogressData } from "../../Assets/Data/Data";

const Storage = () => {
    return (
        <div className="right storage">
            <div className="top">
                <div className="pie_chart">
                    <span>85%</span>

                </div>
                <div className="chart_text">
                    <h3>available storage</h3>
                    <p>130GB / 512GB</p>
                </div>
            </div>
            {
                StorageBrogressData.map((BrogressData, index) => (
                    <StorageBrogress key={index} BrogressData={BrogressData} />
                ))
            }
        </div>
    )
}

export default Storage;