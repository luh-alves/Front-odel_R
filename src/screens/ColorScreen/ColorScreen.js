import React, { Component } from 'react';
import './ColorScreen.css';
import ColorCarRed from '../../images/red-R.png';
import ColorImageGrey from '../../images/grey-dot.png';
import ColorImageBlue from '../../images/blue-dot.png';
import ColorImageRed from '../../images/red-dot.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ColorScreen extends Component {
    render() {
        return (
            <div className="Color">
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className="ColorText">
                            <h2> Color</h2>
                            <p> The 2019 Model R have 3 unique metalic color options. Each color was meticulously developed to
                                look
                        like something completely new to your eyes.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className="ColorImageCar">
                            <figure>
                                <img className='ColorCarRed' src={ColorCarRed} />
                            <figcaption>Metalic Vermilion</figcaption>
                            <figcaption>Included</figcaption>
                            </figure>
                        </div>
                    </Col>
                    <Col xs>
                        <div className="ColorImagesColors">
                            <img className='ColorImageRed' src={ColorImageRed} />
                            <img className='ColorImageBlue' src={ColorImageBlue} />
                            <img className='ColorImageGrey' src={ColorImageGrey} />
                        </div>
                    </Col>
                </Row>


            </div >



        );
    }
}

export default ColorScreen;