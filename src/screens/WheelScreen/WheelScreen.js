import React, { Component } from 'react';
import './WheelScreen.css';
import WheelSilver from '../../images/silver-metalic.png';
import WheelGrafitti from '../../images/performance-carbon.png';
import WheelPerformance from '../../images/grafitti.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class WheelScreen extends Component {
    constructor(props) {
        super(props)
      
    }


    render() {
        return (
            <div className="Wheel">
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='WheelTitle'>
                            <h2>Wheels</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className="WheelsImages">
                        <div>
                            <img onClick={() => this.props.updateWheelSelection(this.props.wheels[0])} className='WheelSilver' src={WheelSilver} />
                            <figcaption>{this.props.wheels[0].label}</figcaption>
                            <figcaption>Included</figcaption>
                            </div>
                            <div>
                            <img onClick={() => this.props.updateWheelSelection(this.props.wheels[1])} className='WheelGrafitti' src={WheelGrafitti} />
                            <figcaption>{this.props.wheels[1].label}</figcaption>
                            <figcaption>{this.props.wheels[1].price}</figcaption>
                            </div>
                            <div>
                            <img onClick={() => this.props.updateWheelSelection(this.props.wheels[2])} className='WheelPerformance' src={WheelPerformance} />
                            <figcaption>{this.props.wheels[2].label}</figcaption>
                            <figcaption>{this.props.wheels[2].price}</figcaption>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default WheelScreen;