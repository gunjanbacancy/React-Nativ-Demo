import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screen/Home';
import Login from './screen/Login';
import About from './screen/About';
import Signup from './screen/Signup';
import Test from './screen/Test';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="homescreen"
                       component={Home}
                       title="Home Page"
                       initial
                />
                <Scene
                    key="loginscreen"
                    component={Login}
                    title="Login Page"
                />
                <Scene
                    key="aboutscreen"
                    component={About}
                    title="About Us Page"
                />
                <Scene
                    key="signupscreen"
                    component={Signup}
                    title="Sign Up Page"
                />
                <Scene
                    key="testscreen"
                    component={Test}
                    title="Test Page"
                />
            </Scene>
        </Router>
    );
}

export default App;