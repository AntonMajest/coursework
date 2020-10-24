import React, {Component} from 'react';
import {findSolutionByIteration, getAmountAfterDot,generateGraph,calculateEquation } from "../../../service/task1";
import ChartGraph from "../../ChartGraph/ChartGraph";
import './Iteration.css'
class Iteration extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            max: '10',
            min: '0',
            step: '0.01',
            solution: 7.92,
            amount: 1,
            dichotomy: 8,
        }
    }

    componentDidMount() {
        let data = generateGraph({min: 0, max: 5}, 0.01, calculateEquation)
        console.log(data)
        this.setState({data: data.filter(el => !isNaN(el.Y) && isFinite(el.Y))})
    }

    changeHandle = (event) => {
        event.preventDefault();
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    formHandler = (e) => {
        try {
            let { min, max, step } = this.state;
            e.preventDefault();
            let data = generateGraph(
                { min: +min, max: +max },
                +step,
                calculateEquation
            );
            this.setState({
                data: data.filter((el) => !isNaN(el.Y) && isFinite(el.Y)),
            });
        } catch (e) {
            console.log(e);
        }
    };

    calculateDot = (e) => {
        e.preventDefault();
        let num;
        try {
            num = findSolutionByIteration(this.state.data);
            this.setState({ solution: num[0], amount: num[0] });
        } catch (e) {
            console.log(e);
        }
    };


    render() {
        return (
            <div className="methodBody">
                <div>
                    <form className={"formBody"} onSubmit={this.formHandler}>
                        <div className={"form-label"}>
                            <label className={"name-label"} htmlFor={"min"}>
                                Min
                            </label>
                            <input
                                name={"min"}
                                value={this.state.min}
                                placeholder={"0"}
                                onChange={this.changeHandle}
                            />
                        </div>
                        <div className={"form-label"}>
                            <label className={"name-label"} htmlFor={"max"}>
                                Max
                            </label>
                            <input
                                name={"max"}
                                value={this.state.max}
                                placeholder={"5"}
                                onChange={this.changeHandle}
                            />
                        </div>
                        <div className={"form-label"}>
                            <label className={"name-label"} htmlFor={"step"}>
                                Step
                            </label>
                            <input
                                name={"step"}
                                value={this.state.step}
                                placeholder={"0.01"}
                                onChange={this.changeHandle}
                            />
                        </div>
                        <button className={"button-made"} type={"submit"}>
                            Створити
                        </button>
                        <div>
                            <div>
                                <div>X = {this.state.solution} </div>
                            </div>
                            <div>
                                <div>Знайдено коренів {this.state.amount} </div>
                            </div>
                        </div>
                        <div>
                            <button className={"button-made"} onClick={this.calculateDot}>
                                Розрахувати точку
                            </button>
                        </div>
                    </form>
                </div>
                <ChartGraph
                    data={this.state.data}
                    dotX={this.state.solution.toFixed(getAmountAfterDot(this.state.step))}
                    dotY={0}
                />
            </div>
    );
    }
}

export default Iteration;