import React, { useState, useEffect } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color, Alert} from 'react-native';
import { Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { db } from '../config/db'
import Joingroupbutton from './Joingroupbutton';


var user = auth().currentUser;


// let studentsRef = db.ref('/Students/' + user.uid+  '/Profile');


export default function Listpeople ({Class}){
  
   const [getname3,setgetname3] = useState('');
  //  const [classcode, setClassCode] = useState('');
  //  const [section, setSection] = useState(''); 
  //  const [gname, setGname] = useState('');
  //  const [matricnum, setMatricNum] = useState('');
  //  const [name, setName] = useState('');

   useEffect(() =>{
    const getName = db.ref('Students/'+ user.uid + '/profile');
    getName.once("value",(snapshot) =>{

        
        setgetname3(snapshot.val());
        
        
    });console.log(getname3);
},[]);



     
    return(
        
       
           
            <View  >
               <Joingroupbutton
                 classcode = {Class.classcode}
                 section = {Class.section}
                 gname = {Class.gname}
                 matricnum = {getname3.matricnum}
                 name = {getname3.name}
                 profileimg = {getname3.profileimg}
               />
                
            </View>
            
        
  
    );
        

}

const styles = StyleSheet.create({
  inputBox :{
    // flexDirection:'row',
    borderColor:'#595959',
    borderWidth:1,
    borderRadius:4,
    width:wp('95%'),
    paddingHorizontal:20,
    paddingVertical:15,
    marginVertical:5,   
    fontWeight:'900',
    color:'#595959', fontSize:18
},
classtext:{
    flex:1,
    height:hp('100%'),
    backgroundColor:'#ffffff',
    alignItems: 'center',
},

container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  button:{
    justifyContent:'center',
    backgroundColor :'#1c313a',
    borderRadius :4,
    paddingVertical:10,
    marginTop:10, 
    width :wp('90%'),

   },

   loginbutton:{
        
        justifyContent:'center',
        textAlign:'center',       
        fontSize:16,
        fontWeight:'500',
        color: '#ffffff'
                
   },
});