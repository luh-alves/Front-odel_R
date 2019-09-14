import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import EngineScreen from './screens/EngineScreen/EngineScreen';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from "./containers/Header/Header";
import Divider from "./components/Divider/Divider";
import Footer from "./containers/Footer/Footer"
import HomeFooter from "./containers/HomeFooter/HomeFooter";
import ColorScreen from './screens/ColorScreen/ColorScreen';
import { loadModelR } from "./services/ModelRService";
import { withRouter } from 'react-router';
import WheelScreen from "./screens/WheelScreen/WheelScreen";
import ResumeScreen from "./screens/ResumeScreen/ResumeScreen";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { modelR: { engine: { items: [{ kwh: 0 }] } }, resumeData: {} };
        this.routes = ["/", "/engine", "/color", "/wheel", "/resume"]
    }

    componentDidMount() {
        //json-ajax
        loadModelR()
            .then(modelR => this.setState({ modelR: modelR, resumeData: { price: modelR.price } }))
            .catch(alert)
    }

    updateEngineSelection(selectedEngine) {
        const newState = this.state;
        newState.resumeData.engine = selectedEngine;
        this.setState(newState)
    }

    updateColorSelection(selectedColor) {
        // novo estado = estado atual
        const newState = this.state;
        newState.resumeData.color = selectedColor;
        this.setState(newState)

    }

    updateWheelSelection(selectedWheel) {
        const newState = this.state;
        newState.resumeData.wheel = selectedWheel;
        this.setState(newState)

    }
    rebuild() {
        this.props.history.push("/")
        this.setState({ modelR: this.state.modelR, resumeData: { price: this.state.modelR.price } })
    }

    goToNextScreen() {
        const currentRoute = this.props.location.pathname;
        const index = this.routes.indexOf(currentRoute);
        const nextIndex = index + 1;
        if (nextIndex >= this.routes.length) {
            return;
        }
        this.props.history.push(this.routes[nextIndex])
    }

    render() {
        return (
            <div>
                <Container>
                    <Header />
                </Container>
                {/*Screens*/}
                <Container className="ScreensContainer">

                    <Switch>
                        <Route path="/" exact={true} render={(props) => <HomeScreen goToNextScreen={this.goToNextScreen.bind(this)} />} />
                        <Route path="/engine" render={(props) => <EngineScreen engines={this.state.modelR.engine.items}
                            updateEngineSelection={this.updateEngineSelection.bind(this)} />} />
                        <Route path="/color" render={(props) => <ColorScreen colors={this.state.modelR.color.items}
                            description={this.state.modelR.color.description}
                            updateColorSelection={this.updateColorSelection.bind(this)} />} />
                        <Route path="/wheel" render={(props) => <WheelScreen wheels={this.state.modelR.wheels.items}
                            updateWheelSelection={this.updateWheelSelection.bind(this)} />} />
                        <Route path="/resume" render={(props) => <ResumeScreen model={this.state.resumeData}
                            onRebuild={this.rebuild.bind(this)} />} />

                    </Switch>

                </Container>
                {/* Divider */}

                <Switch>
                    <Switch>
                        <Route path="/" exact={true} component={null} />
                        <Route path="/resume" exact={true} component={null} />
                        <Route component={Divider} />

                    </Switch>
                </Switch>

                {/*Footer*/}
                <Container>

                    <Switch>
                        <Route path="/" exact={true} component={HomeFooter} />
                        <Route path="/resume" exact={true} component={null} />
                        <Route render={(props) => <Footer model={this.state.resumeData}
                            goToNextScreen={this.goToNextScreen.bind(this)} />} />
                    </Switch>

                </Container>
            </div>
        );
    }
}

export default withRouter(App);
