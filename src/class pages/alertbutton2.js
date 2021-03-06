import React, { useState } from "react";
import { View, StyleSheet, Button, Alert, TouchableOpacity, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Alertbutton2 = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Join Success !",
      "INFO4993",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}
             onPress={createTwoButtonAlert}>
                <Text style={styles.loginbutton}>join</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  button:{
    justifyContent:'center',
    backgroundColor :'#1f2e2e',
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

export default Alertbutton2;