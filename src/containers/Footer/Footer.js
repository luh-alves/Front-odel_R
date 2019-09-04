import React, { Component } from 'react';
import './Footer.css';
import arrow from '../../images/red-arrow.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Color from '../../images/red-dot.png';
import Wheels from '../../images/grafitti.png';



class Footer extends Component {
    render() {
        return (
            <Row className='Footer'>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <span className='TotalLabel'>Total</span>
                        <span className='TotalValue'>$63.000</span>
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">Model</div>
                </Col>
                <Col xs className='FooterIntemContainer'>

                    <div className="FooterItem">Engine</div>
                </Col>
                <Col xs className='FooterIntemContainer'>

                    <div className="FooterItem">
                        <img className='Color' src={Color} />
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <img className='Wheels' src={Wheels} />
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem RightPositioned">Next <img className='Arrow' src={arrow} /></div>
                </Col>

            </Row>

        );
    }
}
export default Footer;