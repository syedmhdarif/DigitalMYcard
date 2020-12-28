

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { View, Container, Content, Footer, FooterTab, Button, Icon, Text, List } from 'native-base';
import { db } from '../config/db';
import StudentList from '../components/StudentList';
import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import ClassTest from './ClassTest';

var user = auth().currentUser;

let studentsRef = db.ref('/Students/' + user.uid + '/Class/');

export default class MyClass2 extends Component {
  constructor(){
    super();
    this.state = {
    Students: []
    }
  }

  componentDidMount() {
    studentsRef.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({Students: firebaseData});
            console.log(this.state.Students);
          }
     });
  }

 

  render() {
    return (
      <View>
        
        <View style={{flex:1}} padder>
        <Text style={{textAlign:'center', fontWeight:'300', fontSize:25, color:'#595959'}}>My Class List</Text>
        <List vertical={true}>
        <StudentList Students={this.state.Students} 
         />
         {/* <Text>{users.uid}</Text> */}
         
        </List>
        
        {/* <Text>{this.props.classcode}</Text> */}
        <ClassTest/>
        </View>
  
       
      </View>
    );
  }
}

// import { View } from "native-base";
// import React, { Component } from "react";

// export default class MyClass2 extends Component{
//   render(){
//     return(
//       <View></View>

//     );
//   }
// }