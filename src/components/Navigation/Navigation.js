import React, {Component} from 'react';
import './Navigation.css'
import {BrowserRouter, Route, Switch, Redirect, NavLink} from "react-router-dom";
import FirstTask from "../FirstTask/FirstTask";
import SecondTask from "../SecondTask/SecondTask";
import ThirdTask from "../ThirdTask/ThirdTask";
import Iteration from "../FirstTask/Iteration/Iteration";
import FirstTaskNav from "./FirstTaskNav/FirstTaskNav";
import Dichotomy from "../FirstTask/Dichotomy/Dichotomy";
import Newton from "../FirstTask/Newton/Newton";

class Navigation extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className={'links'}>
                        <NavLink className={'link'} to={'/firstTask'}>First Task</NavLink>
                        <NavLink className={'link'} to={'/secondTask'}>Second Task</NavLink>
                        <NavLink className={'link'} to={'/thirdTask'}>Third Task</NavLink>
                    </div>
                    <Switch>
                        <Route path={'/firstTask'} component={FirstTask}>
                            <FirstTaskNav/>
                        </Route>
                        <Route path={'/secondTask'} component={SecondTask}>
                            Second Task
                        </Route>
                        <Route path={'/thirdTask'} component={ThirdTask}>
                            Third Task
                        </Route>
                        <Route path={'/firstTaskByIteration'} component={Iteration}>
                            <FirstTaskNav/>
                            <Iteration/>
                        </Route>
                        <Route path={'/firstTaskByDichotomy'} component={Dichotomy}>
                            <FirstTaskNav/>
                            <Dichotomy/>
                        </Route>
                        <Route path={'/firstTaskByNewton'} component={Newton}>
                            <FirstTaskNav/>
                            <Newton/>
                        </Route>
                    </Switch>

                </BrowserRouter>

            </div>
        );
    }
}

export default Navigation;