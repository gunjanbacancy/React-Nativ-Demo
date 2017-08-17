import React, { Component, PropTypes } from 'react';
import renderIf from '../components/comman/renderIf'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight,
    View,
    AsyncStorage,
    ListView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { logIn } from '../actions/user';
import store from "../reducers/index";

import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


class Home extends Component {

    constructor(props){
        super(props);
    }



    render () {
        const {routes} = this.context;
        return (
            <Container>
                <Container>
                    <CommanHeader />
                    <Content padder>

                        <Button onPress={() => { this.getUser()}}><Text>Get User All</Text></Button>

                    </Content>
                    <CommanFooter />
                </Container>
            </Container>
        );
    }
}


export default (Home);