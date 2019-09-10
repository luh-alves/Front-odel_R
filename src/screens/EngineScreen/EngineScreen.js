import React, { Component } from 'react';
import './EngineScreen.css';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EngineImage1 from '../../images/engine-1.png';
import { RadioGroup } from "react-radio-group";
import RadioButton from "../../components/RadioButton/RadioButton";


class EngineScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedValue: props.engines[0].kwh };
    }

    findEngineByKwh(kwh) {
        for (let i = 0; i < this.props.engines.length; i++) {
            const engine = this.props.engines[i];
            if (engine.kwh === kwh) {
                return engine;
            }
        }
    }

    onChange(selectedValue) {
        this.setState({ selectedValue: selectedValue });
        const engine = this.findEngineByKwh(selectedValue);

        this.props.updateEngineSelection(engine);
    }
    render() {
        return (
            <div className="Engine">              
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

                                {this.props.engines.map(engine => <RadioButton engine={engine}
                                                                              selected={this.state.selectedValue}/>)}
                            </RadioGroup>
                        </div>
                    </Col>
                </Row>

            </div >

        );
    }
}

export default EngineScreen;