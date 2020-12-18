import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar, TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Logo from '../components/Logo';
import Form from '../pages/Form';



const Login = () =>{
        return(
            <View style ={styles.container}>
              <View style={styles.textstyle}>
              <Text style={{
                fontSize:14,
                color:'#ffffff',}}>INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA</Text>
              </View>
              <Logo/>
              <Form/>                          
            </View>

        )
    
}

const styles = StyleSheet.create({
    container : {
      backgroundColor :'#1f2e2e',
      flex:1,
     
      
     
    },
    textstyle :{
      
      marginVertical:20,
      backgroundColor:'#004d66',
      width:wp('100%'),
      height:hp('6%'),
      justifyContent:'center',
      alignItems:'center'
      
   
    },
  
     loginbutton:{
          
          justifyContent:'center',
          textAlign:'center',       
          fontSize:16,
          fontWeight:'500',
          color: '#ffffff'
                  
     },
});

export default Login;
