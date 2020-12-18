import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import Startbutton from './startbutton';
import Scanbutton from './Scanbutton';

export default class Record extends Component{

    componentDidMount() {
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
      }
      
    render(){
        return(
            <ScrollView>
            
            <View style={styles.classtext}>

            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                    Start Class
            </Text>
            <Image
                    style={{ width:wp('30%'), height:hp('20%')}}
                    source={require('../images/QR.png')}/>
            
            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Date"
                
                 />
            <Startbutton/>
            
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    inputBox :{
        width :wp('90%'),
        borderBottomWidth:0.4,
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#ffffff',
        marginVertical:8,
    },
    classtext:{
        flex:1,
        height:hp('100%'),
        backgroundColor:'#ffffff',
        alignItems: 'center',
    },
    
});