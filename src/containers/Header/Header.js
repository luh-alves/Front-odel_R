import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/rv_logo_pure_white.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Header extends Component {
    render() {
        return (
            <Row className="Header">
                <Col>
                    <img src={logo}/>
                </Col>
                <Col className="MenuContainer">
                    <nav className="Menu">
                        <ul>
                            <li><a href="#">Model R</a></li>
                            <li><a href="#">Model IQ</a></li>
                            <li><a href="#">Model Mobi</a></li>
                            <li><a href="#">Model Charlie</a></li>
                            <li><a href="#">Model Italy</a></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        );
    }
}

export default Header;

