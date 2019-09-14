import React, { Component } from 'react';
import './ColorScreen.css';
import ColorCarRed from '../../images/red-R.png';
import ColorCarBlue from '../../images/blue-R.png';
import ColorCarGrey from '../../images/grey-R.png';
import ColorImageGrey from '../../images/grey-dot.png';
import ColorImageBlue from '../../images/blue-dot.png';
import ColorImageRed from '../../images/red-dot.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ColorScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { colorCar: ColorCarRed, color: this.props.colors[0]}
    }

    selectionColor(colorCar, color) {
        this.setState({ colorCar: colorCar, color: color });
        this.props.updateColorSelection(color)
    }
    isPriceZero() {
        return (this.state.color.price === 0)
    }

    render() {
        return (
            <div className="Color">
                <Row>
                    <Col md={{ span: 4, offset: 7 }}>
                        <div className="ColorText">
                            <h2> Color</h2>
                            <p>{this.props.description}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className="ColorImageCar">
                            <figure>
                                <img className='ColorCarRed' src={this.state.colorCar} />
                                <figcaption>{this.state.color.label}</figcaption>
                                <figcaption> {this.isPriceZero() ? 'Included' : this.state.color.price}</figcaption>
                            </figure>
                        </div>

                    </Col>
                    <Col xs>
                        <div className="ColorImagesColors">
                            <img onClick={() => this.selectionColor(ColorCarRed, this.props.colors[0])} className='ColorImageRed' src={ColorImageRed} />
                            <img onClick={() => this.selectionColor(ColorCarBlue, this.props.colors[1])} className='ColorImageBlue' src={ColorImageBlue} />
                            <img onClick={() => this.selectionColor(ColorCarGrey, this.props.colors[2])} className='ColorImageGrey' src={ColorImageGrey} />
                        </div>
                    </Col>
                </Row>


            </div >

        );
    }
}

export default ColorScreen;