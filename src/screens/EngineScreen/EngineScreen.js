    
import React, { Component } from 'react';
import './EngineScreen.css';
import { Link } from 'react-router-dom'
import Header from '../../containers/Header/Header';


class EngineScreen extends Component {
  render() {
    return (
      <div className="Engine">
      <Header/>
        <div className="Engine-intro">        
          <h2> Engine </h2>
          <Link to="/">Ir para a página Home \o/</Link>
        </div>
      </div>
    );
  }
}

export default EngineScreen;