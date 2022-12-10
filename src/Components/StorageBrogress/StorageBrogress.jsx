import React from 'react';
import "./StorageBrogress.css";

const StorageBrogress = ({ BrogressData }) => {
    return (
        <div className='detail'>
            <div className="icon">
                {BrogressData.svg}
            </div>
            <div className="info">
                <div className="text">
                    <h4>{BrogressData.name}</h4>
                    <span>{BrogressData.percentage}GB</span>
                </div>
                <div className="progrss_bar">
                    <div className="progrss_bar_colored" style={{ width: `${BrogressData.percentage}px`, backgroundColor: `${BrogressData.color}` }}></div>
                </div>
            </div>
        </div>
    )
}

export default StorageBrogress;