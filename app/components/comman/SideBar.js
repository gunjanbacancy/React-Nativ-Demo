/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';


export default class SideBar extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        This is SideBar
                    </Text>
                </Content>
            </Container>
        );
    }
}



