import React, {Component} from 'react';
import ChartGraph from "../../ChartGraph/ChartGraph";
import {calculateEquation, data} from "../../../service/task2";
import {getAmountAfterDot} from "../../../service/task1";
import './Coefficient.css'
import  {ToastContainer, toast} from "react-toastify";

class Coefficient extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            dataset: JSON.stringify(data[0]),
            max: '15',
            min: '0',
            precision: '0.1',
            solution: {X: 0, Y: 0},
        }
    }


    componentDidMount() {
        try {
            let data = calculateEquation({min: 0, max: 15}, JSON.parse(this.state.dataset), +this.state.precision)
            this.setState({data: data.data.filter(el => !isNaN(el.Y) && isFinite(el.Y)), solution: {X: data.correctX, Y: data.correctY}})
        } catch (e) {
            console.log(e);
        }
    }

    changeHandle = (event) => {
        event.preventDefault();
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    formHandler = (event) => {
        event.preventDefault();
        try {
            let data = calculateEquation(
                { min: +this.state.min, max: +this.state.max },
                JSON.parse(this.state.dataset),
                +this.state.precision
            );
            this.setState({
                data: data.data.filter((el) => !isNaN(el.Y) && isFinite(el.Y)),
                solution: { X: data.correctX, Y: data.correctY },
            });
        } catch (e) {
            console.log(e);
        }
    };

    changeHandler = (event) => {
        this.setState({ dataset: event });
    };


    render() {
        let dataset = JSON.parse(this.state.dataset)
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
                                className={"intervals-input"}
                                name={"max"}
                                value={this.state.max}
                                placeholder={"400"}
                                onChange={this.changeHandle}
                            />
                        </div>
                        <div className={"form-label"}>
                            <label className={"name-label"} htmlFor={"precision"}>
                                Accuracy
                            </label>
                            <input
                                name={"precision"}
                                value={this.state.precision}
                                placeholder={"0.01"}
                                onChange={this.changeHandle}
                            />
                        </div>
                        <div className={"form-label"}>
                            {data.map((dataset, ind) => {
                                return (
                                    <button
                                        className={"button-made"}
                                        onClick={() => this.changeHandler(JSON.stringify(dataset))}
                                    >
                                        Data {ind + 1}{" "}
                                    </button>
                                );
                            })}
                        </div>

                        <div>
                            <div>
                                <div>T = {this.state.solution.X} </div>

                            </div>
                            <div>
                                <div>Значення</div>
                                <div>
                                    <div>B = {dataset.b}</div>
                                    <div>K = {dataset.k}</div>
                                    <div>
                                        T<sub>(0)</sub> = {dataset.t}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={"button-made"} type={"submit"}>
                            Створити
                        </button>
                    </form>

                    <ChartGraph
                        data={this.state.data}
                        dotX={
                            +this.state.solution.X
                        }
                        dotY={this.state.solution.Y}
                    />
                </div>
            </div>
    );
    }
}

export default Coefficient;