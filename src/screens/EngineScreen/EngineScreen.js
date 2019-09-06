import React, { Component } from 'react';
import './EngineScreen.css';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EngineImage1 from '../../images/engine-1.png';
import { RadioGroup } from "react-radio-group";
import RadioButton from "../../components/RadioButton/RadioButton";

const engines = [
    {
        "type": "P",
        "kwh": 75,
        "range": 275,
        "price": 0,
        "id": 1
    },
    {
        "type": "S",
        "kwh": 100,
        "range": 355,
        "price": 5500,
        "id": 2
    },
    {
        "type": "B",
        "kwh": 125,
        "range": 420,
        "price": 10000,
        "id": 3
    }];

class EngineScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedValue: engines[0].kwh };
    }

    onChange(selectedValue) {
        this.setState({ selectedValue: selectedValue })
    }
    render() {
        return (
            <div className="Engine">
                {/* <Link to="/">Ir para a página Home \o/</Link> */}
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='EngineTitle'>
                            <h2> Engine </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <div className='EngineImage'>
                            <img className='engine1' src={EngineImage1} />
                        </div>
                    </Col>
                    <Col xs>
                        <div className='EngineOptions'>
                            <RadioGroup
                                name="engines"
                                selectedValue={this.state.selectedValue}
                                onChange={this.onChange.bind(this)}>

                                {engines.map(engine => <RadioButton engine={engine}
                                    selected={this.state.selectedValue} />)}
                            </RadioGroup>
                        </div>
                    </Col>
                </Row>

            </div >

        );
    }
}

export default EngineScreen;