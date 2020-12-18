import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { View, StyleSheet } from 'react-native';
import Register from './Register';
import HomePage from './HomePage';
import Loading from './Loading';

export default class RegisterPage extends Component{

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
        return  <Register/>
              
      case true:
           return <HomePage/>

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