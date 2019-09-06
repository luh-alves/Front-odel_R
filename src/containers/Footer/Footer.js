import React, { Component } from 'react';
import './Footer.css';
import arrow from '../../images/red-arrow.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Red from '../../images/red-dot.png';
import Blue from '../../images/blue-dot.png';
import Grey from '../../images/grey-dot.png';
import SilverMetalic from '../../images/silver-metalic.png';
import Grafitti from '../../images/grafitti.png';
import PerformanceCarbon from '../../images/performance-carbon.png';

const wheels = {
    7: SilverMetalic,
    8: Grafitti,
    9: PerformanceCarbon
};
const colors = {
    4:Red,
    5:Blue,
    6:Grey
};
class Footer extends Component {
    render() {
        return (
            <Row className='Footer'>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <span className='TotalLabel'>Total</span>
                        <span className='TotalValue'>$
                        {this.props.model.price}</span>
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <span className='Model'>Model R</span>
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>

                    <div className="FooterItem">
                        {this.props.model.engine.kwh}
                        <span className='FooterEngineType'>{this.props.model.engine.type}</span>
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>

                    <div className="FooterItem">
                        <img className='Color' src={colors[this.props.model.color.id]} />
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <img className='Wheels' src={wheels[this.props.model.wheel.id]} />
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem RightPositioned">
                        <span className='Next'>next</span>
                        <img className='Arrow' src={arrow} /></div>
                </Col>

            </Row>

        );
    }
}
export default Footer;