import React, { Component } from 'react';
import './Header.css';
import  logo from '../../images/rv_logo_pure_white.png';


class Header extends Component {
    render() {
        return (
            <div>
            <img className = 'logo' src = {logo} />
            <nav id="menu">
                <ul>
                    <li><a href="#">Model R</a></li>
                    <li><a href="#">Model IQ</a></li>
                    <li><a href="#">Model Mobi</a></li>
                    <li><a href="#">Model Charlie</a></li>
                    <li><a href="#">Model Italy</a></li>
                </ul>
            </nav>
            </div>
        );
    }
}
export default Header;

