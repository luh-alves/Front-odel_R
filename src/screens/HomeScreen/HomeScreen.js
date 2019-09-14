import React, { Component } from 'react';
import './HomeScreen.css';
import begin from '../../images/red-arrow.png';
import redR from '../../images/red-R.png';
import { Link } from "react-router-dom";
class HomeScreen extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='HomeTextContainer'>
                    <h2>Build your</h2>
                    <h1>MODEL <span className='redR'>R</span> </h1>
                </div>
                <div className='ModelRContainer'>
                    <img className='redR' src={redR} />
                    <div  className='BeginText'>
                        <button className='StyleButton' onClick={this.props.goToNextScreen}>
                            <span>B E G I N  <img className='BeginImage' src={begin} /> </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeScreen;

