import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity  } from "react-native";
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
import LinearGradient from "react-native-linear-gradient";

export default class Receive extends Component {
  render() {
    return (
        <LinearGradient colors={['#004d37','#00996e', '#4dffcc',]} style={styles.linearGradient}>
        <View style={styles.matric}>

            <Image                 
                style={{borderRadius:8, marginTop:50,width:150, height:150}}
                source={require('../images/QR.png')}/>
                <Text style={styles.textedit4}>Scan with sender's scanner to send money over</Text>
         
                {/* <TouchableOpacity style={{marginVertical:20}} onPress={()=> auth().signOut()} >
                     <Text style={{color:'black'}} >Logout</Text>
               </TouchableOpacity> */}
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'flex-start',    
      backgroundColor: '#00b383',
      textAlignVertical: 'top',
      
    },
    matric: {
      marginTop:50,
      borderColor:"gold",
      borderWidth:3,
      alignItems: 'center',
      backgroundColor :'#ffffff',
      width:wp('80%'),
      height:hp('40%'),
      marginHorizontal:40,
      borderRadius:10,
      shadowColor: "black",
      shadowOffset: {
        width: 5,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 5,
          
      
    },
   
    textedit4:{ 
      fontSize:17,
      marginHorizontal:7,
      textAlign:"center",
  
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
       
      },
      
  });  