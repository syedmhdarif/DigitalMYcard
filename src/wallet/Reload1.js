import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Reload1 ({navigation}){

    
 
    
    return(
      <View>
<Image style={{resizeMode: "contain",
          marginTop:30,height: 100,
          alignSelf:"center",
          width: 200 }}
        source={require('../images/successful.png')}/> 

<Text style={{borderBottomWidth:0.8,
         textAlign:"center", 
         marginTop:15,
         fontWeight:"bold", 
         fontSize: 25, 
         color:'black'}}>
Awesome!
</Text>

<Text style={{
         textAlign:"center", 
         fontSize: 17,
         marginHorizontal:10, 
         color:'black'}} >
  Reload successful! Please wait a few minutes for your reload and status to be reflected.
</Text>
      </View>
    )
  
}

export default Reload1;

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    container:{
        flexDirection:'row',

    },
    container2:{
       alignItems:'center',
        borderWidth:1,
        borderRadius:5,
         borderColor:"black",
          height:hp('30%'), width:wp('95%'),
          marginVertical:25,
          
         
          

    },
    textedit:{ 
        borderColor:'#595959',
        textAlign:"center",
        borderWidth:1
        ,
        borderRadius:20,
        backgroundColor:"silver",
        width:wp('26%'),
        
        paddingHorizontal:5,
        paddingVertical:4,
        marginVertical:5,
        marginHorizontal:8, 
        fontWeight:'900',
        color:'#595959', fontSize:20
    
      },
});