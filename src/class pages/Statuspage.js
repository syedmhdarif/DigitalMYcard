import React, {Component,  useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, color, ImageBackground  } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
// import { View } from 'react-native-animatable';
import PropTypes from 'prop-types';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
var user = auth().currentUser;

var user = auth().currentUser;


const Statuspage = ({Statuss}) => {
    const [getdate, setgetdate] = useState();
    const [getname3,setgetname3] = useState('');

    const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('StudentAttend')  }
        function navigateToList2() {
            navigation.navigate('StudentView');
        }


     
        
   
 
        return(
            <View >

            

                <Text style={{fontSize:15, paddingTop:4, marginLeft:120, color:'#595959' }}> 
                    {Statuss.status}
                </Text>
           

            </View>
            
                   
             )

}

export default Statuspage;

const styles = StyleSheet.create({
    classtext:{
        
        
        alignItems: 'center',
    },
    textedit:{ 
        flexDirection:'row',
        borderBottomWidth:0.4,
        width:wp('90%'),
        marginVertical:5,   
        paddingVertical:15,
        
    
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
      },
});