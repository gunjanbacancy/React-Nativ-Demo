import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Toast from 'react-native-simple-toast';

import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


export default class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }


    render() {
        return (
            <Container>
                <CommanHeader />
                <Content padder>

                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input value={this.state.username} onChangeText={username => this.setState({username})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input value={this.state.email} onChangeText={email => this.setState({email})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input value={this.state.password} onChangeText={password => this.setState({password})}/>
                    </Item>
                   <Button full  onPress={this._submitForm}>
                        <Text>Submit</Text>
                    </Button>

                </Content>
                <CommanFooter />
            </Container>
        );
    }


    _submitForm = () => {


        const { username, password, email } = this.state

        var formData  = new FormData();
        formData.append('username',username);
        formData.append('email',email);
        formData.append('password',password);

        fetch('http://192.168.1.111/acd/index.php/welcome/signup_react', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json())
            .then((responsedata) => {
                //console.warn('resposnse',responsedata)
                //alert(JSON.stringify(responseData.body))
                //console.log(responsedata)
                //console.warn('resposnse',responsedata.success)
                //alert(responsedata.success)

                if(responsedata.success == false)
                {
                    Toast.show('User already exists !');
                }
                else
                {
                    Toast.show('Successfully Register !');
                    Actions.aboutscreen();
                }


            });


    };

}

