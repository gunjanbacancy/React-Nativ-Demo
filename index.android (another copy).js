/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Content} from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CommanHeader from './app/components/comman/CommanHeader';
import CommanFooter from './app/components/comman/CommanFooter';


export default class AwesomeNativeBase extends Component {
    render() {
        return (
            <Container>
                <CommanHeader />
                <Content padder>

                    <Text>Home Page</Text>

                </Content>
                <CommanFooter />
            </Container>
        );
    }
}

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});*/

AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);