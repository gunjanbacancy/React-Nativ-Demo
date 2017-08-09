import React, { Component } from 'react';
import {Container, Header, Content} from 'native-base';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code


import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


const Login = () => {
    return (
        <Container>
            <CommanHeader />
            <Content padder>

                <Text>Go to About Us Screen</Text>

            </Content>
            <CommanFooter />
        </Container>
    );
}


export default Login;