import React, {Component} from 'react';
import './FooterHome.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class FooterHome extends Component {
    render() {
        return (
            <Row>
                <Col xs>
                    <div className='HomeFooterItem LeftPositioned'>
                        <span className="FeatureValue">2.5</span> s
                        <p>From 0 to 100</p>
                    </div>
                </Col>

                <Col xs>
                    <div className='HomeFooterItem CenterPositioned'>
                        <span className="FeatureValue">420</span> mi
                        <p>Miles range</p>
                    </div>
                </Col>

                <Col xs>
                    <div className='HomeFooterItem HomeFooterItemRightPositioned'>
                        <span className="FeatureValue">250</span> mp/h
                        <p>Max speed</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default FooterHome;