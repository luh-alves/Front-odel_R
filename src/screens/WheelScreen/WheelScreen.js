import React, { Component } from 'react';
import './WheelScreen.css';
import Header from '../../containers/Header/Header';


class WheelScreen extends Component {
  render() {
    return (
        <div className="Wheel">
        <Header/>
            <div className="Wheel-intro">    
              <h2>Wheels</h2>              
            </div>            
        </div>

    );
  }
}
export default WheelScreen;