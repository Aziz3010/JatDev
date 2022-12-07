import React from 'react';
import Widget from '../../Components/Widget/Widget';
import "./Home.css";
import { Icons } from "../../Assets/Data/Data";

const Home = () => {
  return (
    <section className='Home'>

      <div className="leftSide">

        <div className="widgets">
          <Widget icon={Icons.starIcon} title="task completed" number="08" shadow="rgba(80, 81, 249, .4)" color="#5051F9" secondNumber="10" p1="more" p2="from last week" />
          <Widget icon={Icons.paperIcon} title="new task" number="10" shadow="rgba(30, 167, 255, 0.4)" color="#1ea7ff" secondNumber="10" p1="more" p2="from last week" />
          <Widget icon={Icons.noteIcon} title="project done" number="10" shadow="rgba(255, 97, 76, 1)" color="#FF614C" secondNumber="08" p1="more" p2="from last week" />
        </div>

        <div className="chart">

        </div>


        {/* <div className="task">

        </div> */}


      </div>


      <div className="rightSide"></div>
    </section>
  )
}

export default Home;


/*
TinyLineChart
StackedAreaChart || LegendEffectOpacity
BarChartWithCustomizedEvent
*/