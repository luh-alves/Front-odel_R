import React, {Component} from 'react';
import './WheelScreen.css';
import WheelSilver from '../../images/silver-metalic.png';
import WheelGrafitti from '../../images/performance-carbon.png';
import WheelPerformance from '../../images/grafitti.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class WheelScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {wheel: props.wheels[0]}
    }

    componentDidMount() {
        this.props.updateWheelSelection(this.state.wheel)
    }

    updateWheelSelection(wheel) {
        this.setState({wheel: wheel});
        this.props.updateWheelSelection(wheel)
    }

    isCurrentSelected(wheel) {
        return wheel.id === this.state.wheel.id
    }

    render() {
        return (
            <div className="Wheel">
                <Row>
                    <Col md={{span: 3, offset: 6}}>
                        <div className='WheelTitle'>
                            <h2>Wheels</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className="WheelsContainer">
                            <div>
                                <img onClick={() => this.updateWheelSelection(this.props.wheels[0])}
                                     className={this.isCurrentSelected(this.props.wheels[0]) ? 'WheelItem WheelSelected' : 'WheelItem WheelNotSelected'}
                                     src={WheelSilver}/>

                                <div className={this.isCurrentSelected(this.props.wheels[0]) ?
                                    'CaptionSelected' : 'CaptionNotSelected'}>
                                    <figcaption className='ColorWheelLabel'>{this.props.wheels[0].label}</figcaption>
                                    <figcaption className='ColorWheelPrice'>Included</figcaption>
                                </div>
                            </div>

                            <div>
                                <img onClick={() => this.updateWheelSelection(this.props.wheels[1])}
                                     className={this.isCurrentSelected(this.props.wheels[1]) ? 'WheelItem WheelSelected' : 'WheelItem WheelNotSelected'}
                                     src={WheelGrafitti}/>

                                <div className={this.isCurrentSelected(this.props.wheels[1]) ?
                                    'CaptionSelected' : 'CaptionNotSelected'}>

                                    <figcaption className='ColorWheelLabel'>{this.props.wheels[1].label}</figcaption>
                                    <figcaption className='ColorWheelPrice'>{'+$' +this.props.wheels[1].price}</figcaption>
                                </div>
                            </div>

                            <div>
                                <img onClick={() => this.updateWheelSelection(this.props.wheels[2])}
                                     className={this.isCurrentSelected(this.props.wheels[2]) ? 'WheelItem WheelSelected' : 'WheelItem WheelNotSelected'}
                                     src={WheelPerformance}/>

                                <div className={this.isCurrentSelected(this.props.wheels[2]) ?
                                    'CaptionSelected' : 'CaptionNotSelected'}>
                                    <figcaption className='ColorWheelLabel' >{this.props.wheels[2].label}</figcaption>
                                    <figcaption className='ColorWheelPrice'>{ '+$' +this.props.wheels[2].price}</figcaption>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default WheelScreen;