import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import './FirstTaskNav.css'

class FirstTaskNav extends Component {
    render() {
        return (
            <div className={'firstNavLinks'}>
                <NavLink className={'firstNavLink'} to={'/firstTask' + 'ByIteration'}> Метод ітерації </NavLink>
                <NavLink className={'firstNavLink'}  to={'/firstTask' + 'ByDichotomy'}> Метод дихотомії </NavLink>
                <NavLink className={'firstNavLink'}  to={'/firstTask' + 'ByNewton'}> Метод Ньютона </NavLink>
            </div>
        );
    }
}

export default FirstTaskNav;