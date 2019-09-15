import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/rv_logo_pure_white.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedMenu: 'model-r'};
    }

    onClick(clickedMenu) {
        this.setState({selectedMenu: clickedMenu});
    }

    isCurrentSelected(menu) {
        return this.state.selectedMenu === menu;
    }

    render() {
        return (
            <Row className="Header">
                <Col>
                    <img src={logo}/>
                </Col>
                <Col className="MenuContainer">
                    <nav className="Menu">
                        <ul>
                            <li>
                                <a onClick={() => this.onClick('model-r')}
                                   className={this.isCurrentSelected('model-r') ? 'MenuItemSelected' : 'MenuItem'}
                                   href="#">Model R</a>
                            </li>

                            <li>
                                <a onClick={() => this.onClick('model-iq')}
                                   className={this.isCurrentSelected('model-iq') ? 'MenuItemSelected' : 'MenuItem'}
                                   href="#">Model IQ</a>
                            </li>

                            <li>
                                <a onClick={() => this.onClick('model-mobi')}
                                   className={this.isCurrentSelected('model-mobi') ? 'MenuItemSelected' : 'MenuItem'}
                                   href="#">Model Mobi</a>
                            </li>

                            <li>
                                <a onClick={() => this.onClick('model-charlie')}
                                   className={this.isCurrentSelected('model-charlie') ? 'MenuItemSelected' : 'MenuItem'}
                                   href="#">Model Charlie</a>
                            </li>

                            <li>
                                <a onClick={() => this.onClick('model-italy')}
                                   className={this.isCurrentSelected('model-italy') ? 'MenuItemSelected' : 'MenuItem'}
                                   href="#">Model Italy</a>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        );
    }
}

export default Header;

