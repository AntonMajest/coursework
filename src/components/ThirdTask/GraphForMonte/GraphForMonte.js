import React, {PureComponent} from 'react';
import {CartesianGrid, Area, AreaChart, Tooltip, XAxis, YAxis, ReferenceDot} from "recharts";

class GraphForMonte extends PureComponent {
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
                {this.props.dots.map(dot => {
                    return <ReferenceDot x={+dot.x.toFixed(2)} y={dot.y} r={4} fill={dot.valid ? '#fab905' : '"#8884d8"'} stroke="white"/>
                })}
            </AreaChart>
        );
    }
}

export default GraphForMonte;