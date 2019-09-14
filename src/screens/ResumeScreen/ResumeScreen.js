import React, { Component } from 'react';
import './ResumeScreen.css';
import ResumeCarRed from '../../images/final-red.png';
import ResumeCarBlue from '../../images/final-blue.png';
import ResumeCarGrey from '../../images/final-grey.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RefreshImage from '../../images/refresh.png';

const cars = {
    4: ResumeCarRed,
    5: ResumeCarBlue,
    6: ResumeCarGrey
}

class ResumeScreen extends Component {
    render() {
        return (
            <div className="Resume">
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='ResumeTitle'>
                            <h2> You Model R </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className='ResumeImage'>
                            <img className='ResumeCarRed' src={cars[this.props.model.color.id]} />
                        </div>
                    </Col>
                    <Col xs>
                        <div className='ResumeOptions'>
                            <span className='PriceInitial'>Starting Price  ${this.props.model.price}</span>
                            <div className='PriceResume'>
                                <div>
                                    <span>{this.props.model.engine.kwh +
                                        this.props.model.engine.type + " - " +
                                        this.props.model.engine.kwh + " kwh - " +
                                        this.props.model.engine.range + " miles ranger" +
                                        (this.props.model.engine.price ? " +$ " + this.props.model.engine.price : 'Included')}</span>
                                </div>
                                <div>
                                    <span>{this.props.model.color.label +
                                        (this.props.model.color.price ? " +$ " + this.props.model.color.price : 'Included')}</span>

                                </div>
                                <div>
                                    <span>{this.props.model.wheel.label +
                                        (this.props.model.wheel.price ? " +$ " + this.props.model.wheel.price : 'Included')}</span>
                                </div>
                                <span className='PriceFinal'>Final Price ${this.props.model.price +
                                    this.props.model.engine.price +
                                    this.props.model.color.price +
                                    this.props.model.wheel.price} </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='Refresh'>
                            <button onClick = {this.props.onRebuild}>
                                <span>REBUILD <img className='RefreshImage' src={RefreshImage} /></span>
                            </button>
                        </div>
                    </Col>
                </Row>


            </div >

        );
    }
}

export default ResumeScreen;