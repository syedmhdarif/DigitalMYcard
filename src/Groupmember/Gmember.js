import React, { Component, useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';
    import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Gmember2 from './Gmember2';

var user = auth().currentUser;

const Gmember = ({route}) =>{
    const { classcode, section, gname, matricnum, name, profileimg} = route.params;
    const [myClassList, setmyClassList] = useState();

    useEffect(() => {
        const myClassRef = db.ref( 'Classreff/'+ classcode + '_' + section +'/Group/' + gname + '/member/');
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
        <View >
        <View>
            <Text style=
                    {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666', textAlign:'center'}}>
                Group member
            </Text>
        </View>
         <Text style={{textAlign:'center'}}>
                    {myClassList 
                    ? myClassList.map((Class, index) => <Gmember2 Class={Class} key={index} 
                       
                    />)
                    : ''}
            </Text> 

        </View>
    )

}

export default Gmember;