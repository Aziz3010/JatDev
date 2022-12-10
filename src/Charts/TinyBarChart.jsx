import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis } from 'recharts';

export default class TinyBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={this.props.TinyBarChartData}>
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#FF694A" />
          <Bar dataKey="amt" fill="#5051F9" />
          <Bar dataKey="pv" fill="#1EA7FF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
