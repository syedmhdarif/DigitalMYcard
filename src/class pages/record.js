import React, { Component, useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Listpeople from '../Groupclass/Listpeople';

import Startbutton from '../class pages/startbutton';


const Record = ({route}) =>{

  const [myClassList, setmyClassList] = useState();
  const { itemId, otherParam } = route.params;

    

    var user = auth().currentUser;
    useEffect(() => {
        const myClassRef = db.ref( 'Classreff/' + itemId + '_' + otherParam +'/group');
        myClassRef.on("value",(snapshot) => {
            const myClassF = snapshot.val();
            console.log(snapshot);
            const myClassList=[];
            for (let id in myClassF){
                myClassList.push(myClassF[id]);
               
            }
            setmyClassList(myClassList);
            console.log(myClassList)

        });
    },[]);
    

      
    
        return(
            <View style={{flex:1,}}>
            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666', textAlign:'center'}}>
                    Group
            </Text>

              <View style={{marginHorizontal:10}}>
                <Text>
                    {myClassList 
                    ? myClassList.map((Class, index) => <Listpeople Class={Class} key={index} 
                       
                    />)
                    : ''}
                </Text> 
              </View>

            
            </View>
        );
   
}

export default Record;

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