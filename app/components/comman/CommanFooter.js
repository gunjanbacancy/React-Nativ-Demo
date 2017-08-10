/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    AsyncStorage,
    Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux'; // New code



export default class CommanFooter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //storeval: '123456'
        }
    }


    componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))




    render() {
        return (
            <Container>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text
                                onPress={() => Actions.homescreen()}
                            >
                                Home
                            </Text>
                        </Button>
                        {this.state.name ?

                            <Button><Text onPress={() => Actions.dashboardscreen()}>Dashboard</Text></Button>
                            :
                            <Button><Text onPress={() => Actions.aboutscreen()} >About Us</Text></Button>
                        }

                        <Button>
                            <Text
                                onPress={() => Actions.loginscreen()}
                            >
                                Login
                            </Text>
                        </Button>
                        <Button>
                            <Text
                                onPress={() => Actions.signupscreen()}
                            >
                                Sign Up
                            </Text>
                        </Button>

                        {this.state.name ?

                            <Button onPress={() => { logoutuser()}}><Text>Logout</Text></Button>
                            :
                            <Button><Text onPress={() => Actions.testscreen()} >Test Screen</Text></Button>
                        }


                    </FooterTab>
                </Footer>
            </Container>
        );

        function logoutuser()
        {
            alert();
        }


    }


}



