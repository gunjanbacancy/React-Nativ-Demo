import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import {
    StyleSheet,
    Text,
    ScrollView,
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

                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <input type="text" name="username" />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <input type="password" name="password" />
                    </Item>
                    <Button block>
                        <Text>Log In</Text>
                    </Button>
                </Form>

            </Content>
            <CommanFooter />
        </Container>
    );
}


export default Login;