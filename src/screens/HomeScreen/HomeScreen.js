import React, { Component } from 'react';
import './HomeScreen.css';
import Header from '../../containers/Header/Header';
import FooterHome from '../../containers/FooterHome/FooterHome';
import begin from '../../images/red-arrow.png';
import redR from '../../images/red-R.png';


class HomeScreen extends Component {
    render() {
        return (
            <div className="Home">
                <Header />
                <p className="Home-intro">
                    {/* <Link to="/enginescreen">Ir para a página Engine \o/</Link>         */}
                </p>

                <div className='Home-body'>
                    <h2>Build your</h2>
                    <h3>MODEL R</h3>
                </div>

                <img className='red-R' src={redR} />
                <h6>BEGIN <img className='begin' src={begin} /></h6>


                <FooterHome />
            </div>

        );
    }
}

export default HomeScreen;

