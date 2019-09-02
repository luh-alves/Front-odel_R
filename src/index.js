import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import EngineScreen from './screens/EngineScreen/EngineScreen';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path = "/" exact = {true} component = {HomeScreen} />
        <Route path = "/enginescreen" component = {EngineScreen}/>
    </Switch>
</BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
