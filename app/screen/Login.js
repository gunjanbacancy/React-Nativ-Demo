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
import { Actions } from 'react-native-router-flux';

import Toast from 'react-native-simple-toast';


import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';



export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

    /*setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    }*/




    render() {
        return (
            <Container>
                <CommanHeader />
                <Content padder>
                    <Item floatingLabel>
                        <Input value={this.state.name} />
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
                        <Text>Log In</Text>
                    </Button>
                </Content>
                <CommanFooter />
            </Container>
        );
    }




    _submitForm = () => {

        const { email, password } = this.state
        var formData  = new FormData();
        formData.append('email',email);
        formData.append('password',password);

        fetch('http://192.168.1.111/acd/index.php/welcome/login_react', {
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

                //console.warn('resposnse',responsedata.user_details[0].id)

                if(responsedata.success == 0 || responsedata.success == false)
                {
                    Toast.show('Please Try Again !');
                }
                else
                {
                    Toast.show('Successfully Login !');
                    //console.warn('resposnse',responsedata)



                    AsyncStorage.setItem("name", responsedata.user_details[0].id);
                    this.setState({"name": responsedata.user_details[0].id});


                    /*try {
                        AsyncStorage.setItem("xzxzxz", 'x1x1x1');
                    } catch (error) { // log the error
                    }





                    try {
                        const value = AsyncStorage.getItem('@xzxzxz:key');
                        if (value !== null){
                            // We have data!!
                            console.warn('resposnse',value);
                            alert(value);
                        }
                    } catch (error) {
                        // Error retrieving data
                    }*/



                    //Actions.aboutscreen();

                }



            });






    };

}

