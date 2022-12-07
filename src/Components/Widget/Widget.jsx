import React from 'react';
import "./Widget.css";
import LineChartComponent from '../../Charts/LineChart';

const Widget = ({icon, title, number, shadow, color, secondNumber, p1, p2}) => {
    return (
        <div className="widget">
            <div className="top">
                <div className="left">
                    <div className="image">
                        {icon}
                    </div>
                    <h2>{title}</h2>
                </div>
                <div className="right">
                    <h2>{number}</h2>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="left">
                    <div className="small_chart">
                        <LineChartComponent shadow={shadow} color={color} />
                    </div>
                </div>
                <div className="right">
                    <p><span>{secondNumber}+</span>{p1}</p>
                    <p>{p2}</p>
                </div>
            </div>
        </div>
    )
}

export default Widget;