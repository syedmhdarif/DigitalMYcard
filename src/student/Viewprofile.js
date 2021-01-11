import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';


import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import * as firebase from 'firebase';

import LogoProfile from './LogoProfile';

var user = auth().currentUser;




let studentsRef = db.ref('/Students/' + user.uid+  '/Profile');

export default class Viewprofile extends Component {
  constructor(){
   super();
   this.state = {
     Students: [],
    
     
   }
  }

  componentDidMount() {
    
    studentsRef.on('value', (snapshot) => {
      let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({Students: firebaseData},()=>{
              this.state.Students.map((element) => {
                this.setState({
                  name: element.name,
                  lname : element.lname,
                  matricnum: element.matricnum,
                  course: element.course,
                  profileimg : element.profileimg,
                 
                  
                });
               
              }); 
            });
          }
     });
  }

  setName = (value) =>{
    this.setState({ name: value });
  }

  setMatricNo = (value) =>{
    this.setState({ matricnum: value });
  }

  

  render() {
    return (
            <LinearGradient 
      style={{flex: 1,}}
      colors={[ '#199591','#21c4bf', '#51e1dd']}> 

            
           
        <Image style={{marginTop:20,alignSelf:'center', 
            borderRadius:100,elevation:6, position:'absolute',
             marginTop:'7%',width:wp('34%'), height:hp('19%')}}
                source={{uri :this.state.profileimg}}/>                
                
        
              
      <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.profileview, {
              backgroundColor: '#ffffff'
            }]}
        >                     
      <View >
        <View style={{marginTop:'22%'}}>
            <Text style={{color:'black', alignSelf:'center', fontSize:20}}>
            {this.state.name}
            </Text>
            <Text style={{color:'black', alignSelf:'center', fontSize:20}}>
            {this.state.lname}
            </Text>
            <Text style={{color:'black', alignSelf:'center', marginTop:20,fontSize:19}}>
            {this.state.matricnum}
            </Text>
            <Text style={{color:'black', alignSelf:'center', fontSize:19}}>
            {this.state.course}
            </Text>
            <Text style={{color:'black', alignSelf:'center', fontSize:19}}>
            {user.email}
            </Text>

        </View>
        
            <Text style={{textAlign:'center'}}></Text>
        </View>
        
        </Animatable.View>
        
        </LinearGradient>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      
      
      
    },
  
    logout: {
      marginVertical:10,
      
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      height:hp('5%'),
      backgroundColor:'#ff7675',
      width:wp('20%'),
      borderRadius: 10,
      
    },
    backprofile:{
      height:hp('30%'), width:wp('80%'),
      position:'absolute',
      backgroundColor:'white',
      padding:150,
      paddingHorizontal:170,
      marginTop:300,
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
    backprofile2:{
      alignItems :'center',
      
      padding:200,
      
      marginTop:('20%'),
      elevation:4,
      height:hp('100%'),
    },
    profileview:{
      width:wp('94%'), height:hp('80%'),   
      alignSelf:'center',
      borderTopStartRadius:35,
      borderTopRightRadius:35,
      
      shadowColor: "black",
      shadowOffset: {
        width: 40,
        height:5,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 4,
      marginTop:('25%'),
    },
    header:{
      flexDirection:'row',
      width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
      shadowColor: "black",
      shadowOffset: {
        width: 5,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 5,
      alignItems:'center',
      paddingHorizontal:22
    }
   
  
    });