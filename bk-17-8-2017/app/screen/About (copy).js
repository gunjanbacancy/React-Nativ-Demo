import React, { Component } from 'react';
import {Container, Header, Content} from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code


import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


const Login = () => {

    
    AsyncStorage.getItem('name').then((keyValue) => {
        console.warn(keyValue) //Display key value

        //this.setState({ storeval: "123" });

    }, (error) => {
        console.warn(error) //Display error
    });



    return (
        <Container>
            <CommanHeader />
            <Content padder>

                <Text>Go to About Us Screen : {this.state.storeval}</Text>

            </Content>
            <CommanFooter />
        </Container>
    );





}


export default Login;