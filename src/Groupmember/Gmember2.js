import React, { Component, useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';
    import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Left, Right } from 'native-base';

export default function Listpeople ({Class}){
    return(
        <View >
        
            <View style={{flexDirection:'row', marginTop:8}}>
                
                <Image style={styles.profile} source={{uri :Class.profileimg}}/>
                
                
                <View style={{paddingHorizontal:30}}>
                    <Text style={{fontSize:12, fontWeight:'900',marginTop:5}}>
                        {Class.name}
                    </Text>
                   
                    <Text style={{fontSize:12, fontWeight:'900', marginTop:10}}>
                        {Class.matricnum}
                    </Text>
                </View>
                
            </View>
            <View style={{ paddingHorizontal:190,
            borderBottomWidth:0.5, borderColor:'#595959', paddingVertical:5}}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    classtext:{
        flex:1,
        height:hp('100%'),
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
        marginHorizontal:5,
        width:wp('20%'),
        height:hp('10%'),           
        borderRadius:50,
        backgroundColor:'#00b359',
     
    }
});