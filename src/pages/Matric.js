import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List } from 'native-base';
import { db } from '../config/db';

import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import MatricCard from './MatricCard';
 
var user = auth().currentUser;

let studentsRef = db.ref('/Students/' + user.uid + '/Profile/');

export default class Matric extends Component {
  constructor(){
    super();
    this.state = {
    Studentss: []
    }
  }

  componentDidMount() {
    studentsRef.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({Studentss: firebaseData});
            console.log(this.state.Studentss);
          }
     });
  }

 

  render() {
    return (
        
        
        <MatricCard Studentss={this.state.Studentss} 
         />
         
        
    );
  }
}