import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TouchableOpacity,View,Text, StyleSheet, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Reload ({navigation}){

    return (
        <LinearGradient colors={['#004d37','#00996e', '#4dffcc',]} style={styles.linearGradient}>
        <View>


        <TextInput style={styles.inputBox} 
                    placeholderTextColor="#595959"            
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType = 'numeric'
                    placeholder="Enter your preferred amount"
                    color='black'
                    />
        
        <Text style={{fontSize: 14,marginLeft:40}}> Min reload amount is RM10</Text>

        <TouchableOpacity  onPress={() => navigation.navigate('Reload1')}>
                    <Text style={styles.textedit}>
                        Reload Ewallet
                    </Text>
                </TouchableOpacity>






                    </View>
                    </LinearGradient>
      )}
  

  


export default Reload;



const styles = StyleSheet.create({
    inputBox :{
        width :wp('80%'),
       borderWidth:2.5,
       borderColor:"gold",
       backgroundColor:'white',
       borderRadius:20,
        alignSelf:"center",
        paddingHorizontal: 12,
        fontSize: 18,
        // color: 'white',
        marginTop:50,
    },
    classtext:{
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
       
      },

    textedit:{ 
        borderColor:'gold',
        textAlign:"center",
        borderWidth:2.5,
        borderRadius:20,
        backgroundColor:"white",
        width:wp('40%'),
        alignSelf:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical:15,
        marginHorizontal:15, 
        fontWeight:'900',
        color:'black', fontSize:20
    
      },
})