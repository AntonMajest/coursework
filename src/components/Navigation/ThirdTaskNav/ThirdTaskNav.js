import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './ThirdTaskNav.css'

class ThirdTaskNav extends Component {
    render() {
        return (
            <div className={'thirdNavLinks'}>
                <NavLink className={'thirdNavLink'}  to={'/thirdTask' + 'ByRectan'} activeClassName='active-link'> Метод прямокутників </NavLink>
               {/* <NavLink className={'thirdNavLink'}  to={'/thirdTask' + 'BySimpson'}> Метод Сімпсона </NavLink>*/}
                <NavLink className={'thirdNavLink'}  to={'/thirdTask' + 'ByTrapezium'} activeClassName='active-link'> Метод Трапецій </NavLink>
                <NavLink className={'thirdNavLink'}  to={'/thirdTask' + 'ByMonteCarlo'} activeClassName='active-link'> Метод Монте-Крало </NavLink>
            </div>
        );
    }
}

export default ThirdTaskNav;