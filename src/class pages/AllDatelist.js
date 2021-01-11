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


const AllDatelist = ({Class}) => {
    const [getdate, setgetdate] = useState();
    const [getname3,setgetname3] = useState('');

    const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('StudentAttend')  }
        function navigateToList2() {
            navigation.navigate('StudentView');
        }


        useEffect(() =>{
            const getName = db.ref('Students/'+ user.uid + '/Profile');
            getName.once("value",(snapshot) =>{
        
                
                setgetname3(snapshot.val());
                
                
            });console.log(getname3);
        },[]);

        
   
 
        return(
            <View >

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => navigateToList()}  >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
                    {Class.day}/{Class.month}/{Class.year}                 
                </Text>
                

                <Text style={{fontSize:15, paddingTop:4, marginLeft:120, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            </View>
            
                   
             )

}

export default AllDatelist;

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
  