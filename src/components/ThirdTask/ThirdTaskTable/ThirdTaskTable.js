import React, {Component} from 'react';
import './ThirdTaskTable.css'
class ThirdTaskTable extends Component {
    values = [10, 20, 50, 100, 1000]
    render() {
        return (
            <table className={'third-task-table'}>
                <thead>
                <tr>
                    <th>Кількість ітерацій</th>
                    <th>Аналітичне Значення</th>
                    <th>{this.props.title}</th>
                    <th>Абсолютна похибка</th>
                    <th>Відносна похибка</th>
                </tr>
                </thead>
                <tbody>
                {this.values.map(value => {
                    let num = +this.props.func(value).toFixed(4)
                    return (
                        <tr key={value}>
                            <td>{value}</td>
                            <td>{this.props.analiticValue}</td>
                            <td>{num}</td>
                            <td>{Math.abs(this.props.analiticValue - num).toFixed(4)}</td>
                            <td>{Math.abs(this.props.analiticValue - num)/this.props.analiticValue * 100} %</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
}

export default ThirdTaskTable;