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



/*AsyncStorage.getItem('name').then((keyValue) => {
    console.warn(keyValue) //Display key value
}, (error) => {
    console.warn(error) //Display error
});*/



export default class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            storeval: '123456'
        }
    }


    render() {
        return (
            <Container>
                <CommanHeader />
                <Content padder>

                    <Text>Dashboard Screen :=> {this.state.storeval}</Text>

                </Content>
                <CommanFooter />
            </Container>
        );
    }



}

