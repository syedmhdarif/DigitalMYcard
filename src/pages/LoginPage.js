import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Form from './Form';
import Login from './Login';
import Loading from './Loading';
import IDcard from './ID Card';

export default class LoginPage extends Component{

  state={
    loggedIn:null
  }

  componentDidMount(){
 
      auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })
  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return  <Login/>
              
      case true:
           return <IDcard/>

           default:
             return <Loading/>

    }
  }
  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      height:'100%',
      width:'100%'
    
    },
  });