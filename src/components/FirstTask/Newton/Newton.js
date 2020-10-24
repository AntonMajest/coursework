import React, {Component} from 'react';
import {findSolutionByNewton,getAmountAfterDot,generateGraph,calculateEquation } from "../../../service/task1";
import ChartGraph from "../../ChartGraph/ChartGraph";

class Newton extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            max: '10',
            min: '0',
            step: '0.01',
            solution: 12.97766,
            amount: 1,
            dichotomy: 8,
            log: [],
            newton: 0.001,
        }
    }


    componentDidMount() {
        let data = generateGraph({min: 0, max: 5}, 0.01, calculateEquation)
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
        try {
            findSolutionByNewton(
                { min: +this.state.min, max: +this.state.max },
                +this.state.newton
            )
                .then((result) => {
                    if (result === null) {
                        this.setState({ solution: 0, amount: 0 });
                    } else {
                        this.setState({
                            solution: result[result.length - 1]["Точка перетину Осі X"],
                            amount: 1,
                        });
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    };


    render() {
        return (
            <div className="methodBody">
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
                        <label className={"name-label"} htmlFor={"newton"}>
                            Точність
                        </label>
                        <input
                            name={"newton"}
                            value={this.state.newton}
                            placeholder={"0.001"}
                            onChange={this.changeHandle}
                        />
                        <button className={"button-made"} onClick={this.calculateDot}>
                            Розрахувати точку
                        </button>
                    </div>
                    <div>
                        <div>
                            <div>X = {this.state.solution} </div>
                        </div>
                        <div>
                            <div>Знайдено коренів {this.state.amount} </div>
                        </div>
                    </div>
                </form>

                <ChartGraph
                    data={this.state.data}
                    dotX={+this.state.solution.toFixed(getAmountAfterDot(this.state.step))}
                    dotY={0}
                />
            </div>
    );
    }
}

export default Newton;