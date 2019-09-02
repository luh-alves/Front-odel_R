import React, { Component } from 'react';
import './FooterHome.css';

class FooterHome extends Component {
    render() {
        return (
            <div>
            <nav id="FooterHome">
                <ul>
                    <li><a href="#">2.5s <p>From 0 to 100</p></a></li>
                    <li><a href="#">420 mi <p>Miles range</p></a></li>
                    <li><a href="#">250mp/h <p>Max speed</p></a></li>
                </ul>
            </nav>
            </div>
        );
    }
}
export default FooterHome;