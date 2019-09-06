import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import EngineScreen from './screens/EngineScreen/EngineScreen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from "./containers/Header/Header";
import Divider from "./components/Divider/Divider";
import Footer from "./containers/Footer/Footer"
import FooterHome from "./containers/FooterHome/FooterHome";

 const currentModel =  {
        "price": 63000,
        "engine": {
            "type": "P",
            "kwh": 75,
            "range": 275,
            "price": 0,
            "id": 1
        },
        "color": {
            "hexadecimal": "#AB1725",
            "label": "Metalic Vermilion",
            "price": 0,
            "id": 6
        },
        "wheel": {
            "label": "20” Silver Metalic",
            "price": 0,
            "id": 7
        }
    }

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header />
                </Container>
                {/*Screens*/}
                <Container className="ScreensContainer">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact={true} component={HomeScreen} />
                            <Route path="/engine" component={EngineScreen} />

                        </Switch>
                    </BrowserRouter>
                </Container>
                {/* Divider */}
                <BrowserRouter>
                    <Switch>
                        <Route component={Divider} />
                        <Route path="/" exact={true} component={null} />
                        <Route path="/resume" exact={true} component={null} />
                    </Switch>
                </BrowserRouter>
                {/*Footer*/}
                <Container>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact={true} component={FooterHome} />
                            <Route path="/resume" exact={true} component={null} />
                            <Route render={(props) => <Footer model={currentModel} />} />
                        </Switch>
                    </BrowserRouter>
                </Container>
            </div>
        );
    }
}

export default App;
