import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';


import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

import Logo from './profilephoto';
import ProfileGallery from './ProfileGallery';
const ProfilePage =() =>{

  const { colors } = useTheme();
    return(
     
      <View >
      <ScrollView>
      <LinearGradient 
      style={{flex: 1,}}
      colors={[ '#008075','#00b3a4', '#00e6d2']}> 
           
      <Logo/>
        
              
      <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.profileview, {
              backgroundColor: '#ffffff'
            }]}
        >                     
      <View >
        <View style={{marginTop:'25%'}}>
            <Text style={{color:'black', alignSelf:'center', fontSize:20}}>
            syedmhdarif
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            Haiii helloo anyeong this is my bio
            </Text>
            
        </View>

            <TouchableOpacity style={styles.logout} onPress={()=> auth().signOut()} >
            <Text style={{color:'white',}} >Logout</Text>
            </TouchableOpacity>
         
            <ProfileGallery/>
            <Text style={{textAlign:'center'}}>this is the end</Text>
        </View>
        
        </Animatable.View>
        
        </LinearGradient>
    </ScrollView>
    </View>
   
    )}

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
    width:wp('96%'),   
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
 

  });
export default ProfilePage;