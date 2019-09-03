import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import EngineScreen from './screens/EngineScreen/EngineScreen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer"
import FooterHome from "./containers/FooterHome/FooterHome";

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
                            <Route path="/enginescreen" component={EngineScreen} />
                        </Switch>
                    </BrowserRouter>
                </Container>

                {/*Footer*/}
                <Container>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact={true} component={FooterHome} />
                            <Route component={Footer} />
                        </Switch>
                    </BrowserRouter>
                </Container>
            </div>
        );
    }
}

export default App;
