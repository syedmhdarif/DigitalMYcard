import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

// create a component
const LoginForm = () => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
        <View style={{marginBottom:('5%'), alignItems:'center'}}>
            <Logo/>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
        <View >
            
            <View style={styles.emailAndPassword}>
                <EmailAndPassword/>
            </View>

        
        </View>

        
        </Animatable.View>

        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },

    logoContainer:{
        
        alignItems: 'center',
        
    },
    emailAndPassword:{
        marginVertical:'20%',

    },
    footer: {
        
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height:hp('90%'),
        width:wp('100%')
    },
});

//make this component available to the app
export default LoginForm;