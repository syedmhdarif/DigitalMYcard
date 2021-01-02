import React, { useState, useEffect } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color} from 'react-native';
import { Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';




export default function Anothertest ({Students}){

   const [handleToggle,setHandleToggle] = useState(false);

   const navigation = useNavigation();

    // function navigateToList() {
    //     navigation.navigate('Info4993', Students);
    // }
    // function navigateToList2() {
    //     navigation.navigate('StudentView');
    // }




    return(
       
        <View style={styles.textedit} >
            <View   style={{flexDirection:'column'}}>
          
              
              <Text style={{fontSize:18, color:'#595959'}}>{Students.classcode}</Text>
            
            </View>
           
            <Right>

            <Icon color='#595959' name="arrow-forward" />
            </Right>
              
            
          </View>
         
    );
        

}

const styles = StyleSheet.create({
    classtext:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    textedit:{ 
      flexDirection:'row',
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
      header:{
        flexDirection:'row',
        width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
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
     
});