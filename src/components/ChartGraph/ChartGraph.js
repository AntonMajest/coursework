import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot} from "recharts";

class ChartGraph extends PureComponent {
    render() {
        return (
            <LineChart width={1000}
                       height={500}
                       data={this.props.data}
                       margin={{top: 15, right: 5, left: 20, bottom: 15}}
            >
                <CartesianGrid strokeDasharray={'1 1'}/>
                <XAxis dataKey={'X'}/>
                <YAxis dataKey={'Y'}/>
                <Tooltip/>
                <ReferenceDot x={this.props.dotX}
                              y={this.props.dotY}
                              r={8}
                              fill="#A6003F"
                              stroke="#635B73" />
                <Line type={'monotone'}
                      dataKey={'Y'}
                      stroke="#A6003F"
                      activeDot={{r: 10}}
                      dot={false}
                />
            </LineChart>
        );
    }
}

export default ChartGraph;