import React, { Component } from 'react';
import './EngineScreen.css';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EngineImage1 from '../../images/engine-1.png';


class EngineScreen extends Component {
    render() {
        return (
            <div className="Engine">
                {/* <Link to="/">Ir para a página Home \o/</Link> */}
                <Row>
                    <Col md={{ span: 11, offset: 6 }}>
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
                            <label></label>
                        </div>
                    </Col>
                </Row>

            </div >

        );
    }
}

export default EngineScreen;