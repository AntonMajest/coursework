import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot} from "recharts";

class Chart extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <LineChart width={1000}
                       height={500}
                       data={this.props.data.slice(1)}
                       margin={{top: 15, right: 5, left: 20, bottom: 15}}
            >
                <CartesianGrid strokeDasharray={'1 1'}/>
                <XAxis dataKey={'X'}/>
                <YAxis dataKey={'Y'}/>
                <Tooltip/>
                <ReferenceDot x={this.props.dot} y={0} r={5} fill="#8884d8" stroke="white" />
                <Line type={'natural'}
                      dataKey={'Y'}
                      stroke="#DD5145"
                      activeDot={{r: 9}}
                      dot={false}
                />
            </LineChart>
        );
    }
}

export default Chart;