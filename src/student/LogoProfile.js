//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// create a component
const LogoProfile = () => {
    return (
        <View style={{ marginTop:20,alignSelf:'center', 
        borderRadius:100,elevation:6, position:'absolute'}}>
            
            <Image source={require('../images/syed.jpg')} style={{height:130, width:130, borderRadius:100}} />
            
        </View>
    );
};

export default LogoProfile;