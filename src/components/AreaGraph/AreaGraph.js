import React, {Component} from 'react';
import {CartesianGrid, Area, AreaChart, Tooltip, XAxis, YAxis} from "recharts";

class AreaGraph extends Component {
    render() {
        return (
            <AreaChart width={1000}
                       height={500}
                       data={this.props.data}
                       margin={{top: 15, right: 5, left: 20, bottom: 15}}
            >
                <CartesianGrid strokeDasharray={'1 1'}/>
                <XAxis dataKey={'X'}/>
                <YAxis dataKey={'Y'}/>
                <Tooltip/>
                <Area type={'monotone'}
                      dataKey={'Y'}
                      stroke="#B50120"
                      fill="#B50120"
                      activeDot={{r: 8}}
                />
            </AreaChart>
        );
    }
}

export default AreaGraph;