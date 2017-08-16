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
    AsyncStorage,
    ListView
} from 'react-native';

import { Actions } from 'react-native-router-flux'; // New code
import Toast from 'react-native-simple-toast';

import CommanHeader from '../components/comman/CommanHeader';
import CommanFooter from '../components/comman/CommanFooter';


export default class Home extends Component {

    constructor(props) {
        super(props)


        this.state = {
            udata:[{"user_id":"x","username":"1"}]
        }
        this.getUser = this.getUser.bind(this);

    }


    //componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))


    getUser = () => {

        fetch('http://192.168.1.111/acd/index.php/welcome/user_list_react', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'multipart/form-data'
            },
            //body: formData
        }).then((response) => response.json())
            .then((responsedata) => {

                //console.warn('resposnse',responsedata.user_details);
                this.setState({udata:responsedata.user_details});

            });
    }


    render() {
        const {udata} = this.state;
        //console.warn('udata',udata);




        var locationArray = [{"name":"canada","id":"2"},{"name":"sweden","id":"3"}];

        var Locations = locationArray.map(function(result) {
            return <Text key={result.id}> {result.name} - {result.id}</Text> ;
        });



        var contents = udata.map(function (item) {
            return <Text  key={item.user_id}>{item.user_id} => {item.username}</Text>;
        });



        return (
            <Container>
                <CommanHeader />
                <Content padder>

                    <Button onPress={() => { this.getUser()}}><Text>Get User All</Text></Button>

                    <View>
                        {contents}
                    </View>


                    <Text>{JSON.stringify(udata)}</Text>



                    <View>
                        {Locations}
                    </View>








                </Content>
                <CommanFooter />
            </Container>
        );

    }



}

var styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:'row',
        padding:18,
        borderBottomWidth: 1,
        borderColor: '#d7d7d7',
    },
    selectionText:{
        fontSize:15,
        paddingTop:3,
        color:'#b5b5b5',
        textAlign:'right'
    },
});

