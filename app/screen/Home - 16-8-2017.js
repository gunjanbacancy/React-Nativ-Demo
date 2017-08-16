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

/*
var Contacts  = require('react-native-unified-contacts');

Contacts.getContacts( (error, contacts) =>  {
    if (error) {
        console.error(error);
    }
    else {
        console.warn(contacts);
    }
});
*/
/*
AsyncStorage.getItem('name').then((keyValue) => {

    console.warn(keyValue)
    //this.setState({"storage": keyValue});

}, (error) => {
    console.warn(error)
});
*/


/*getUser() {

        fetch('http://192.168.1.111/acd/index.php/welcome/test', {
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

            });
    }*/




export default class Home extends Component {

    constructor(props) {
        super(props)



        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            ds:[{AwayTeam: "TeamA", HomeTeam: "TeamB", Selection: "AwayTeam"},{AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"}],
            dataSource:ds,
            udata:null
        }
        this.getUser = this.getUser.bind(this);

    }


    //componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))


    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.state.ds),
        })

    }


    pressRow(rowData){

        var newDs = [];
        newDs = this.state.ds;
        // /newDs[0].Selection = newDs[0] == "AwayTeam" ? "HomeTeam" : "AwayTeam";
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newDs)
        })

    }


    renderRow(rowData){
        return (
            <TouchableHighlight
                onPress={()=> this.pressRow(rowData)}
                underlayColor = '#ddd'>
                <View style ={styles.row}>
                    <Text>{rowData.AwayTeam} @ {rowData.HomeTeam} </Text>
                    <View>
                        <Text>{rowData[rowData.Selection]}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        )
    }

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


                //this.setState({"userlistdata": responsedata.user_details});


                //alert(JSON.stringify(responseData.body))
                //console.log(responsedata)

                //console.warn('resposnse',responsedata.user_details[0].id)

            });
    }


    render() {
        const {udata} = this.state;
        console.warn('udata',udata);
        return (
            <Container>
                <CommanHeader />
                <Content padder>



                    <Button onPress={() => { this.getUser()}}><Text>Get User All</Text></Button>

                    <ListView
                        dataSource = {this.state.dataSource}
                        renderRow = {this.renderRow.bind(this)}>
                    </ListView>

                    <Text>{JSON.stringify(udata)}</Text>


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

