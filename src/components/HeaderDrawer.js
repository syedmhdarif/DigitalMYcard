import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';
import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, color } from 'react-native';

import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

function HeaderDrawer({navigation}){
    return(
        <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
                <Icon name="list-outline" color='white' size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
    )
}

export default HeaderDrawer;

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        width:wp('100%'), height:hp('8%'), backgroundColor:'#00994d',
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
})