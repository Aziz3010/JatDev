import React from 'react';
import Widget from '../../Components/Widget/Widget';
import "./Home.css";
import { Widgets, TasksContent } from "../../Assets/Data/Data";
import StackedChart from '../../Components/StackedChart/StackedChart';
import Tasks from '../../Components/Tasks/Tasks';
import HrLine from '../../Components/HrLine/HrLine';
import NewTask from '../../Components/NewTask/NewTask';
import Messages from '../../Components/Messages/Messages';
import AddCollaborators from '../../Components/AddCollaborators/AddCollaborators';
import Scheudle from '../../Components/Scheudle/Scheudle';

const Home = () => {
  return (
    <section className='Home'>
      <div className="leftSide">
        {/* Widgets */}
        <div className="widgets">
          {
            Widgets.map((widget, index) => (
              <Widget key={index} icon={widget.icon} title={widget.title} number={widget.number} shadow={widget.shadow} color={widget.color} secondNumber={widget.secondNumber} p1={widget.p1} p2={widget.p2} dataChart={widget.dataChart} />
            ))
          }
        </div>
        {/* Chart */}
        <StackedChart />
        {/* Tasks */}
        <div className="tasks">
          <h3 className='title'>task</h3>
          {TasksContent.map((TaskContent, index) => (
            <Tasks key={index} TaskContent={TaskContent} />
          ))}
        </div>
      </div>
      <div className="rightSide">
        <Scheudle />
        <HrLine margin="30px 0" />
        <Messages />
        <NewTask />
        <HrLine margin="20px 0" />
        <AddCollaborators />
      </div>
    </section>
  )
}

export default Home;