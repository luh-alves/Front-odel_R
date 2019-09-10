import React, { Component } from 'react';
import './HomeScreen.css';
import begin from '../../images/red-arrow.png';
import redR from '../../images/red-R.png';
import {Link} from "react-router-dom";
class HomeScreen extends Component {
    render() {
        return (
            <div className="Home">
                {/* <Link to="/enginescreen">Ir para a página Engine \o/</Link>         */}

                <div className='HomeTextContainer'>
                    <h2>Build your</h2>
                    <h1>MODEL <span className='redR'>R</span> </h1>
                </div>
                <div className='ModelRContainer'>
                    <img className='redR' src={redR}/>
                    <Link to="/engine"><h6>BEGIN <img className='begin' src={begin}/></h6></Link>
                </div>
            </div>
        );
    }
}

export default HomeScreen;

