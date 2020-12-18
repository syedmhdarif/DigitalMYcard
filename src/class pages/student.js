import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import MyBackButton from './backbutton';
import Studentlist from '../student/Studentlist';


export default class Student extends Component{

    componentDidMount() {
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
      }

    render(){
        return(
            <ScrollView>
            
            <View style={styles.classtext}>

                <Text style=
                    {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                        Student List
                </Text>

                <Studentlist/>
                <Studentlist/>
                <Studentlist/>
                <Studentlist/>
                <Studentlist/>
            </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        
    },
    textedit:{ 
        flexDirection:'row',
        borderBottomWidth:0.4,
        width:wp('90%'),
        marginVertical:5,   
        paddingVertical:15,
    
      },
    profile:{
        width:wp('20%'),
        height:hp('10%'),
               
        borderRadius:40,
        
        backgroundColor:'#00b383',
        shadowColor: "black",
        shadowOffset: {
        width: 5,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        
    }
});