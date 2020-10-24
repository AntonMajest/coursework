import React, {Component} from 'react';
import {findSolutionByIteration,findSolutionByDichotomy, getAmountAfterDot,generateGraph,calculateEquation } from "../../../service/task1";
import ChartGraph from "../../ChartGraph/ChartGraph";


class Dichotomy extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            max: '10',
            min: '0',
            step: '0.01',
            solution: 0.00,
            amount: 1,
            dichotomy: 4,
        }
    }

    componentDidMount() {
        let data = generateGraph({min: 0, max: 10}, 0.01, calculateEquation)
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
            let log = findSolutionByDichotomy(
                {
                    min: +this.state.min,
                    max: +this.state.max,
                },
                +this.state.dichotomy
            );
            if (log === null) {
                this.setState({ solution: 0, log: [], amount: 0 });
            } else {
                num = log[log.length - 1]["Центр"];
                this.setState({ solution: num, log: log, amount: 1 });
            }
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
                        <div className="second-setForm">
                            <div className={"secondSetForminput"}>
                                <label className={"name-label"} htmlFor={"dichotomy"}>
                                    Кількість ділень
                                </label>
                                <input
                                    name={"dichotomy"}
                                    value={this.state.dichotomy}
                                    placeholder={"8"}
                                    onChange={this.changeHandle}
                                />

                                <div>
                                    <div>
                                        <div>X = {this.state.solution} </div>
                                    </div>
                                    <div>
                                        <div>Знайдено коренів {this.state.amount} </div>
                                    </div>
                                </div>
                            </div>
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

export default Dichotomy;