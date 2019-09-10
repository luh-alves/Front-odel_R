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
    4: Red,
    5: Blue,
    6: Grey
};
class Footer extends Component {
    render() {
        let totalPrice = this.props.model.price
        if (this.props.model.engine) {
            totalPrice = totalPrice + this.props.model.engine.price
        }

        return (
            <Row className='Footer'>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <span className='TotalLabel'>Total</span>
                        <span className='TotalValue'>$
                        {totalPrice}</span>
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem">
                        <span className='Model'>Model R</span>
                    </div>
                </Col>
                <Col xs className='FooterIntemContainer'>

                    {this.props.model.engine ?
                        <div className="FooterItem">
                            {this.props.model.engine.kwh}
                            <span className='FooterEngineType'>{this.props.model.engine.type}</span>
                        </div>
                        : null}
                </Col>
                <Col xs className='FooterIntemContainer'>

                    {this.props.model.color ?
                        <div className="FooterItem">
                            <img className='ColorSize' src={colors[this.props.model.color.id]} />
                        </div>
                        : null}
                </Col>
                <Col xs className='FooterIntemContainer'>
                    {this.props.model.wheel ?
                        <div className="FooterItem">
                            <img className='Wheels' src={wheels[this.props.model.wheel.id]} />
                        </div>
                        : null}
                </Col>
                <Col xs className='FooterIntemContainer'>
                    <div className="FooterItem RightPositioned">
                        <button onClick={this.props.goToNextScreen}>
                            <span className='Next'>next</span>
                            <img className='Arrow' src={arrow} />
                        </button>
                    </div>
                </Col>

            </Row>

        );
    }
}
export default Footer;