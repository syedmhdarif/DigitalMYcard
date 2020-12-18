import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import Studentlist from './Studentlist';

export default class StudentAttend extends Component{
  render(){
    return(
        <ScrollView>
        <View style={styles.classtext}>

            <Text style={{fontSize:20, fontWeight:'bold', color:'#595959', marginVertical:20, marginHorizontal:10}}>Present</Text>

            <Studentlist/>
            <Studentlist/>
            <Studentlist/>
            <Studentlist/>
          
            <Text style={{fontSize:20, fontWeight:'bold', color:'#595959', marginVertical:20, marginHorizontal:10}}>Absent</Text>

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
        shadowRadius: 2,
        elevation: 5,
        
    }
});