import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Logo extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image
                    style={{  height:120,width:120,margin:10}}
                    source={require('../images/logo4.png')}/>
                    <Text style={styles.matric}>
                    DIGITAL MATRIC CARD</Text>
            </View>
         
        )
    }

}

const styles = StyleSheet.create({
    
    container : {
        margin:'10%',    
        justifyContent: 'flex-end',
        alignItems: 'center',
       
        
    },

    matric :{
        paddingTop:10,
        color:'#ffffff', fontSize:18
    
      }
    
})