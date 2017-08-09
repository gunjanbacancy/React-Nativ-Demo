/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

//import SideBar from './SideBar';



export default class CommanHeader extends Component {

    render() {
        return (
            <Container>
              <Header>
                <Left>
                  <Button transparent>
                    <Icon name='ios-bonfire' />
                  </Button>
                </Left>
                <Body>
                <Title>First App</Title>
                </Body>
                <Right />
              </Header>
            </Container>
        );
    }
}



