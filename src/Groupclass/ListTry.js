import React, { useState, useEffect } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color, Alert} from 'react-native';
import { Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';




export default function ListTry ({Student}){

   const [handleToggle,setHandleToggle] = useState(false);

   const createTwoButtonAlert = () =>
    Alert.alert(
      "Group joined!",
      "Inserted" , 
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


    const createTwoButtonAlert2 = () =>
    Alert.alert(
      "Group joined!",
      "Group 2",
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

    const createTwoButtonAlert3 = () =>
    Alert.alert(
      "Group joined!",
      "Group 3",
     
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
    
    return(
        
       
           
            <View  >
                <View style={styles.inputBox}>
            
                  <Text style={{fontSize:20, color:'#595959'}}>{Student.matricnum}</Text>
                  <View style={styles.container}>
                      <TouchableOpacity style={styles.button}
                          onPress={createTwoButtonAlert}>
                              <Text style={styles.loginbutton}>Join Group</Text>
                      </TouchableOpacity>
                  </View>
              
              </View>

              
                
                
            </View>
            
        
  
    );
        

}

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