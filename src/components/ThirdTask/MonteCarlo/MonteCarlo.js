import React, {Component} from 'react';
import AreaGraph from "../../AreaGraph/AreaGraph";
import {generateGraph} from "../../../service/task1";
import {equation, trap, simpson, rectangle, monteCarlo} from "../../../service/task3";
import ThirdTaskTable from "../ThirdTaskTable/ThirdTaskTable";
import {toast} from "react-toastify";

class MonteCarlo extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            max: '3',
            min: '0',
            maxY: '1',
            minY: '0',
            iterations: '10',
            solution: 0.00,
        }
    }



    componentDidMount() {
        let data = generateGraph({min: 0, max: 3.14}, 0.01, equation)
        this.setState({data: data.filter(el => !isNaN(el.Y) && isFinite(el.Y))})
    }

    changeHandle = (event) => {
        event.preventDefault()
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    formHandler = (e) => {
        try {
            let {min, max} = this.state
            e.preventDefault()
            let data = generateGraph({min: +min, max: +max}, 0.01, equation)
            this.setState({data: data.filter(el => !isNaN(el.Y) && isFinite(el.Y))})
        } catch (e) {
            toast.error(e.message)
        }
    }

    calculateArea = (e) => {
        e.preventDefault()
        let {min, max, minY, maxY, iterations} = this.state
        let num;
        try {

                    num = monteCarlo({xMin: +min, xMax: +max}, {yMin: +minY, yMax: +maxY}, +iterations)
                    console.log(num)
                    this.setState({solution: num})


        } catch(e) {
            toast.error(e.message)
        }
    }

    render() {
        let {min, max, maxY, minY} = this.state
        return (
            <div className="methodBody">

                <div className={"table"}>
    <div className={"table-title"}>
      Метод Монте-Карло
    </div>
                    <ThirdTaskTable
                        title={"Метод Монте-Карло"}
                        analiticValue={19.086}
                        func={(iters) =>
                            monteCarlo(
                                { xMax: +max, xMin: +min },
                                { yMax: +maxY, yMin: +minY },
                                iters
                            )
                        }
                    />
                </div>
                    <div className='flxDirRow'>
                <form className={"intervals"} onSubmit={this.formHandler}>
                    <div className={"form-label"}>
                        <label className={"name-label"} htmlFor={"min"}>Min</label>
                        <input
                            className={"intervals-input"}
                            name={"min"}
                            value={this.state.min}
                            placeholder={"0"}
                            onChange={this.changeHandle}
                        />
                    </div>
                    <div className={"form-label"}>
                        <label className={"name-label"} htmlFor={"max"}>Max</label>
                        <input

                            name={"max"}
                            value={this.state.max}
                            placeholder={"5"}
                            onChange={this.changeHandle}
                        />
                    </div>
                    <div className={"form-label"}>
                        <label className={"name-label"} htmlFor={"step"}>Iterations</label>
                        <input

                            name={"iterations"}
                            value={this.state.iterations}
                            placeholder={"10"}
                            onChange={this.changeHandle}
                        />
                    </div>
                    <button className={"button-made"} type={"submit"}>
                        Створити
                    </button>
                    <div className={"form-label"}>
                        <label className={"name-label"} htmlFor={"minY"}>Мінімальне значення Y</label>
                        <input

                            name={"minY"}
                            value={this.state.minY}
                            placeholder={"0"}
                            onChange={this.changeHandle}
                        />
                    </div>
                    <div className={"form-label"}>
                        <label className={"name-label"} htmlFor={"maxY"}>Максимальне значення Y</label>
                        <input

                            name={"maxY"}
                            value={this.state.maxY}
                            placeholder={"1"}
                            onChange={this.changeHandle}
                        />
                    </div>

                    <div>X = {this.state.solution} </div>
                    <button
                        className={"button-made"}
                        type={"button"}
                        onClick={this.calculateArea}
                    >
                        Розрахувати
                    </button>
                </form>



                <AreaGraph data={this.state.data} />
            </div>
            </div>


    );
    }
}

export default MonteCarlo;