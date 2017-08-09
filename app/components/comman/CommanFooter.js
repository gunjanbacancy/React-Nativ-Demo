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
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux'; // New code

export default class CommanFooter extends Component {
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
                        <Button>
                            <Text
                                onPress={() => Actions.aboutscreen()}
                            >
                                About Us
                            </Text>
                        </Button>
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
                        <Button>
                            <Text
                                onPress={() => Actions.testscreen()}
                            >
                                Test Screen
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}



