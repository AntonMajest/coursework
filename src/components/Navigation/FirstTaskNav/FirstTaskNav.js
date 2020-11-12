import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import './FirstTaskNav.css'

class FirstTaskNav extends Component {
    render() {
        return (
            <div className={'firstNavLinks'}>
                <NavLink className={'firstNavLink'} to={'/firstTask' + 'ByIteration'} activeClassName='active-link'> Метод ітерації </NavLink>
                <NavLink className={'firstNavLink'}  to={'/firstTask' + 'ByDichotomy'} activeClassName='active-link'> Метод дихотомії </NavLink>
                <NavLink className={'firstNavLink'}  to={'/firstTask' + 'ByNewton'} activeClassName='active-link'> Метод Ньютона </NavLink>
            </div>
        );
    }
}

export default FirstTaskNav;