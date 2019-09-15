import React, {Component} from 'react';
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
        super(props);
        this.state = {colorCar: ColorCarRed, color: this.props.colors[0]}
    }

    selectionColor(colorCar, color) {
        this.setState({colorCar: colorCar, color: color});
        this.props.updateColorSelection(color);
    }

    componentDidMount() {
        this.props.updateColorSelection(this.state.color)
    }

    isPriceZero() {
        return (this.state.color.price === 0)
    }

    isCurrentSelected(color) {
        return color.id === this.state.color.id;
    }

    render() {
        return (
            <div className="Color">
                <Row>
                    <Col xs className="InvisibleWhenMobile">
                    </Col>
                    <Col xs>
                        <div className="ColorText">
                            <h2> Color</h2>
                            <p>{this.props.description}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className="ColorCarContainer">
                            <figure>
                                <img className='ColorCar' src={this.state.colorCar}/>
                                <div className='ColorCarDescription'>
                                    <figcaption>{this.state.color.label}</figcaption>
                                    <figcaption
                                        className=' ColorCarPrice'> {this.isPriceZero() ? 'Included' : ('+$' + this.state.color.price)}</figcaption>
                                </div>
                            </figure>
                        </div>

                    </Col>
                    <Col xs>
                        <div className="ColorImagesContainer">
                            <img onClick={() => this.selectionColor(ColorCarRed, this.props.colors[0])}
                                 className={this.isCurrentSelected(this.props.colors[0]) ? 'ColorWithBorderSelected' : 'ColorWithBorder'}
                                 src={ColorImageRed}/>

                            <img onClick={() => this.selectionColor(ColorCarBlue, this.props.colors[1])}
                                 className={this.isCurrentSelected(this.props.colors[1]) ? 'ColorWithBorderSelected' : 'ColorWithBorder'}
                                 src={ColorImageBlue}/>

                            <img onClick={() => this.selectionColor(ColorCarGrey, this.props.colors[2])}
                                 className={this.isCurrentSelected(this.props.colors[2]) ? 'ColorWithBorderSelected' : 'ColorWithBorder'}
                                 src={ColorImageGrey}/>
                        </div>
                    </Col>
                </Row>


            </div>

        );
    }
}

export default ColorScreen;