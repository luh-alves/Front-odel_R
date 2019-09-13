import React, { Component } from 'react';
import './ResumeScreen.css';
import ResumeCar from '../../images/final-red.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RefreshImage from '../../images/refresh.png';


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
                            <img className='ResumeCar' src={ResumeCar} />
                        </div>
                    </Col>
                    <Col xs>
                        <div className='ResumeOptions'>
                            <span className='PriceInitial'>Starting Price  ${this.props.model.price}</span> 
                            <div className='PriceResume'>
                                <div>
                                    <span>kkk</span>
                                </div>
                                <div>
                                    <span>kkk</span>
                                </div>
                                <div>
                                    <span>kkk</span>
                                </div>
                                <span className='PriceFinal'>Final Price ${this.props.model.totalPrice} </span> 
                             </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='Refresh'>
                            <span>REBUILD <img className='RefreshImage' src={RefreshImage} /></span>
                        </div>
                    </Col>
                </Row>


            </div >

        );
    }
}

export default ResumeScreen;