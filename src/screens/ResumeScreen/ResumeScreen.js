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
};

class ResumeScreen extends Component {
    render() {
        return (
            <div className="Resume">
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='ResumeTitle'>
                            <h2 className='ResumeTitleYour'> Your
                            <span className='ResumeTitleModel'> Model </span>
                                <span className='ResumeTitleType'> R</span>
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className='ResumeCarImageContainer'>
                            <img className='ResumeCarImage' src={cars[this.props.model.color.id]} />
                        </div>
                    </Col>
                    <Col xs>
                        <div className='ResumeOptions'>
                            <div className='InitialPrice'>
                                <span>Starting Price</span>
                                <span className='ResumeItemValue'>{'$' + this.props.model.price}</span>
                            </div>

                            <div className='ResumePriceContainer'>
                                <div className='ResumePrice'>
                                    <span>
                                        {this.props.model.engine.kwh +
                                            this.props.model.engine.type + " - " +
                                            this.props.model.engine.kwh + " kwh - " +
                                            this.props.model.engine.range + " miles ranger"}
                                    </span>
                                    <span className='ResumeItemValue'>
                                        {this.props.model.engine.price ? "+ $" + this.props.model.engine.price : 'Included'}
                                    </span>
                                </div>
                                <div className='ResumePrice'>
                                    <span>{this.props.model.color.label}</span>
                                    <span className='ResumeItemValue'>
                                        {this.props.model.color.price ? "+ $" + this.props.model.color.price : 'Included'}
                                    </span>

                                </div>
                                <div className='ResumePrice'>
                                    <span>{this.props.model.wheel.label}</span>
                                    <span className='ResumeItemValue'>
                                        {this.props.model.wheel.price ? "+ $" + this.props.model.wheel.price : 'Included'}
                                    </span>

                                </div>

                            </div>
                            <div className='FinalPrice'>
                                <span>Final Price</span>
                                <span className='ResumeItemValue'>
                                    {'$' + (this.props.model.price +
                                        this.props.model.engine.price +
                                        this.props.model.color.price +
                                        this.props.model.wheel.price)}
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs className='InvisibleWhenMobile'>

                    </Col>
                    <Col xs>
                        <div className='RebuildContainer'>
                            <button className='StyleButton' onClick={this.props.onRebuild}>
                                <span className='StyleRebuild'>REBUILD <img className='RefreshImage' src={RefreshImage} /></span>
                            </button>
                        </div>
                    </Col>
                </Row>


            </div>

        );
    }
}

export default ResumeScreen;