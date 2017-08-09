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
import { Actions } from 'react-native-router-flux';

import Toast from 'react-native-simple-toast';


import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }


    render() {
        return (
            <Container>
                <CommanHeader />
                <Content padder>

                    <View>
                        <TextInput
                            autoFocus={true}
                            value={this.state.username}
                            onChangeText={username => this.setState({username})}

                        />

                        <TextInput
                            ref="password"
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}

                        />

                        <TouchableHighlight onPress={this._submitForm}>
                            <Text>Submit</Text>
                        </TouchableHighlight>
                    </View>

                </Content>
                <CommanFooter />
            </Container>
        );
    }


    _submitForm = () => {

        const { username, password } = this.state
        var formData  = new FormData();
        formData.append('username',username);
        formData.append('password',password);

        //let data = JSON.stringify({'username':username,'password':password});
        //alert(username);
        //alert(password);


        //http://localhost/acd/index.php/welcome/test


        fetch('http://192.168.1.111/acd/index.php/welcome/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json())
            .then((responsedata) => {
                console.warn('resposnse',responsedata)
                //alert(JSON.stringify(responseData.body))
                //console.log(responsedata)
        });




        /*fetch('http://192.168.1.111/acd/index.php/welcome/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },


            body: JSON.stringify({
                password: password,
                username:username,
            })
        }).then((response) => response.json())
            .then((responseData) => {
                console.log("inside responsejson");
                console.log('response object:',responseData)
                alert(responseData)

            }).done();*/


        /*fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                //return responseJson.movies;
                alert("result:"+JSON.stringify(responseJson))
                //this.setState({
                    //dataSource:this.state.dataSource.cloneWithRows(responseJson)
                //})
            }).catch((error) => {
            console.error(error);
        });*/


        // do some stuff here…
        //alert(username);

        /*if(username == "demo" && password=="demo")
        {
            //alert("1");
            Actions.aboutscreen();
        }
        else
        {
            //alert("Please Try Again");
            Toast.show('Please Try Again !');
        }*/

    };

}

