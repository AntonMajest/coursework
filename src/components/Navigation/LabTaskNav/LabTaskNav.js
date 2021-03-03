import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";


class LabTaskNav extends Component {
    render() {
        return (
            <div className={'firstNavLinks'}>
                <NavLink className={'firstNavLink'} to={'/labtask' + 'ByIteration'} activeClassName='active-link'> Метод ітерації </NavLink>
                <NavLink className={'firstNavLink'}  to={'/labtask' + 'ByDichotomy'} activeClassName='active-link'> Метод дихотомії </NavLink>
                <NavLink className={'firstNavLink'}  to={'/labtask' + 'ByNewton'} activeClassName='active-link'> Метод Ньютона </NavLink>
            </div>
        );
    }
}

export default LabTaskNav;