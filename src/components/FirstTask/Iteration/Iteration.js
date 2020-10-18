import React, {Component} from 'react';
import {closestToZero, findSolutionByIteration, findSolutionByDichotomy } from "../../../service/task1";
import Chart from "../../Chart/Chart";

class Iteration extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            max: '9',
            min: '0',
            step: '0.01',
            dot: '3.50',
            solution: 3.50,
            dichotomy: 8,
            newton: 0.001,
            mode: 'iteration'
        }
    }

    formHandler = (e) => {
        let {min, max, step} = this.state
        e.preventDefault()
        let data = findSolutionByIteration({min: +min, max: +max}, +step)
        let dot = closestToZero(data)
        console.log(dot)
        this.setState({data: data, dot: dot.X + ''})
    }

    componentDidMount() {
        let data = findSolutionByIteration({min: 0, max: 9}, 0.01)
        this.setState({data: data})
        console.log(data)
    }

    changeHandle = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    calculateDot = (e) => {
        e.preventDefault()
        let num;
        debugger;
        num = closestToZero(this.state.data)
        this.setState({solution: num})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formHandler}>
                    <div>
                        <label htmlFor={'min'}>Min</label>
                        <input name={'min'}
                               value={this.state.min}
                               placeholder={'0'}
                               onChange={this.changeHandle}
                        />
                    </div>
                    <div className={'interval-wrapper'}>
                        <label htmlFor={'max'}>Max</label>
                        <input className={'intervals-input'}
                               name={'max'}
                               value={this.state.max}
                               placeholder={'5'}
                               onChange={this.changeHandle}
                        />
                    </div>
                    <div className={'interval-wrapper'}>
                        <label htmlFor={'step'}>Step</label>
                        <input className={'intervals-input'}
                               name={'step'}
                               value={this.state.step}
                               placeholder={'0.01'}
                               onChange={this.changeHandle}
                        />
                    </div>
                    <button type={'submit'}>Створити</button>
                </form >

                <div className={'solution'}>
                    <span>X = </span>
                    <span>{this.state.solution}</span>
                </div>
                <Chart data={this.state.data} dot={this.state.dot}/>
            </div>
        );
    }
}

export default Iteration;