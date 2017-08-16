import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight,
    View,
    AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux'; // New code
import Toast from 'react-native-simple-toast';

import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


/*
AsyncStorage.getItem('name').then((keyValue) => {

    console.warn(keyValue)
    //this.setState({"storage": keyValue});

}, (error) => {
    console.warn(error)
});
*/


export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

    render() {
        return (
            <Container>
                <CommanHeader />
                <Content padder>

                    <Text>Dashboard :=> {this.state.name}</Text>

                </Content>
                <CommanFooter />
            </Container>
        );
    }



}

