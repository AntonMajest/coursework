import React, {PureComponent} from 'react';
import AreaGraph from "../../AreaGraph/AreaGraph"
import {queryTask4, queryTask4Differ} from "../../../config/config"
import { 
    findSolutionByIteration,
    findSolutionByNewton,
    findSolutionByDichotomy,
    generateGraph,
} from "../../../service/task1";
import { calculateEquation, calculateDifferential} from '../../../service/labtask'
import {getAmountAfterDot} from "../../../service/task1"
import {toast} from "react-toastify";
import DifferentialTable from "../../DifferentialTable/DifferentialTable"


class LabTaskIteration extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: [],
            max: '2',
            min: '0',
            step: '0.01',
            solution: 2.22,
            amount: 1,
            dichotomy: 8,
            log: [],
            newton: 0.001,

        }
        this.func = calculateEquation
    }


    componentDidMount() {
        let data = generateGraph({min: 0, max: 2}, 0.01, this.func)
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
            let {min, max, step} = this.state
            e.preventDefault()
            let data = generateGraph({min: +min, max: +max}, +step, this.func)
            this.setState({data: data.filter(el => !isNaN(el.Y) && isFinite(el.Y))})
        } catch (e) {
            toast.error(e.message)
        }
    }

    calculateDot = (e) => {
        e.preventDefault()
        let num;
        try {
                    num = findSolutionByIteration(this.state.data)
                    this.setState({solution: num[0], amount: num[1]})    
        } catch(e) {
            toast.error(e.message)
        }
    }

    render() {
        return (
            <div className="methodBody">
        
                        <div className={'tables'}>
                            <span className={'table-header'}><b>Метод Ітерацій</b></span>
                            <DifferentialTable/>
                        </div>
     
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
                                <div>Знайдено коренів 1 </div>
                            </div>
                        </div>
                        <div>
                            <button className={"button-made"} onClick={this.calculateDot}>
                                Розрахувати точку
                            </button>
                        </div>
                    </form>
                </div>
        

                            <AreaGraph data={this.state.data}
                                   dotX={+this.state.solution.toFixed(getAmountAfterDot(this.state.step))}
                                   dotY={0}
                            />
                        
                    
    
            </div>
        );
    }
}

export default LabTaskIteration;