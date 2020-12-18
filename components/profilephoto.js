//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// create a component
const Logo = () => {
    return (
        <View style={{backgroundColor:'white', marginTop:20, width:wp('42%'),alignSelf:'center', 
        borderRadius:200,elevation:6, position:'absolute'}}>
            
            <Image source={{uri:'https://uilogos.co/img/logotype/circle.png'}} style={{height:150, width:150}} />
            
        </View>
    );
};

export default Logo;