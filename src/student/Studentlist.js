import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

export default class Studentlist extends Component{
  render(){
    return(
        <View>
            <View style={{flexDirection:'row', paddingHorizontal:10,borderBottomWidth:0.5, borderColor:'#595959', paddingVertical:5}}>
                <View style={styles.profile}></View>
                <View style={{paddingHorizontal:30}}>
                    <Text style={{fontSize:12, fontWeight:'900',marginTop:5}}>
                        SYED MOHAMAD ARIF BIN SAYED MOHD
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'900',}}>
                        ALI SAIPUDDIN
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'900', marginTop:10}}>
                        1718247
                    </Text>
                </View>
            </View>

            <View style={{flexDirection:'row', paddingHorizontal:10,borderBottomWidth:0.5, borderColor:'#595959', paddingVertical:5}}>
                <View style={styles.profile}></View>
                <View style={{paddingHorizontal:30}}>
                    <Text style={{fontSize:12, fontWeight:'900',marginTop:5}}>
                        UMAR HAKIMI BIN ZAHABUDDIN
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'900', marginTop:10}}>
                        1718247
                    </Text>
                </View>
            </View>

            <View style={{flexDirection:'row', paddingHorizontal:10,borderBottomWidth:0.5, borderColor:'#595959', paddingVertical:5}}>
                <View style={styles.profile}></View>
                <View style={{paddingHorizontal:30}}>
                    <Text style={{fontSize:12, fontWeight:'900',marginTop:5}}>
                        NIK HAMIDI BIN WAN HAMAT
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'900', marginTop:10}}>
                        1712475
                    </Text>
                </View>
            </View>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        height:hp('100%'),
        backgroundColor:'#ffffff',
        alignItems:'center',
        
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
        height:hp('11%'),           
        borderRadius:50,
        backgroundColor:'#00b359',
     
    }
});