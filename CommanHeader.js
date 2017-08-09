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

export default class CommanHeader extends Component {
    render() {
        return (
            <Container>
              <Header>
                <Left>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                <Title>Header</Title>
                </Body>
                <Right />
              </Header>
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

AppRegistry.registerComponent('AwesomeNativeBase', () => CommanHeader);
