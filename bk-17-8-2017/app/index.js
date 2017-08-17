import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

//configuring store
import configureStore from './store/configureStore';
const store = configureStore();

//connect router with redux
const RouterWithRedux = connect()(Router);

//components
import Home from './screen/Home';
import Login from './screen/Login';
import About from './screen/About';
import Signup from './screen/Signup';
import Test from './screen/Test';
import Dashboard from './screen/Dashboard';



export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        console.ignoredYellowBox = ['Setting a timer'];
    }
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
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
                        <Scene
                            key="dashboardscreen"
                            component={Dashboard}
                            title="Dashboard Page"
                        />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}