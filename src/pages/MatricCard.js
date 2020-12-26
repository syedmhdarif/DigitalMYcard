import React, { Component } from "react";
import {  StyleSheet, Button, Image, TouchableOpacity, ScrollView, color, ImageBackground  } from "react-native";
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Text, ListItem, Left, Right, Icon, View } from 'native-base';
import PropTypes from 'prop-types';

export default class MatricCard extends Component {

  static propTypes = {
      Studentss: PropTypes.array.isRequired
  };



  render() {
    return(
        
      this.props.Studentss.map((data, index) => {
        return(
          
           <View>
          <View style={styles.container} >

            <View style={
                {backgroundColor:'#f2f2f2', marginTop:'50%',width:wp('100%'), 
                height:hp('100%'), elevation: 3, position:'absolute',
                borderTopLeftRadius:90}}>
                    
            </View>               

            <View style={{alignItems:'center', marginTop:'10%'}}>

                <ImageBackground 
                style={styles.matric} 
                source={require('../images/matriccard.png')}>

                <Image                 
                    style={{ borderRadius:20, marginTop:100,width:wp('37%'), height:hp('23%')}}
                    source={require('../images/syed.jpg')}/>

                    <View style={styles.textview}>
                        <Text style={styles.textedit}>{data.fname}</Text>
                    
                        <Text style={styles.textedit}>{data.matricnum}</Text>
                        <Text style={styles.textedit}>{data.course}</Text>
                    </View>

                <Image                 
                    style={{borderRadius:8, marginTop:'7%',width:wp('30%'), height:hp('17%')}}
                    source={require('../images/syedqr.png')}/>
                <Text style={styles.textedit2}>17.07.2020  03.29pm</Text>
         
                <TouchableOpacity style={{marginVertical:'4%'}} onPress={()=> auth().signOut()} >
                     <Text style={{color:'black'}} >Logout</Text>
               </TouchableOpacity></ImageBackground>
               </View>
        </View>
          </View> 
          
        )
    })
    )
  }
}

const styles = StyleSheet.create({
    container: {
      
      justifyContent:'flex-start',    
      backgroundColor: '#199591',
      textAlignVertical: 'top',
      
      
      
    },
    matric: {
      marginVertical:0,
      alignSelf:'center',
      width:wp('85%'), 
      height:hp('90%'), 
      elevation:4, 
      alignItems:'center',
      marginBottom:20,
      shadowColor: "black",
      shadowOffset: {
        width: 60,
        height:1,
      },
      shadowOpacity: 20,
      shadowRadius: 40,
      borderWidth:0.2,
      borderRadius:20
      
      
    },
    textedit:{    
      fontWeight:'bold',
      color:'black', fontSize:17
  
    },
    textedit2:{    
      fontWeight:'bold',
      color:'black', fontSize:14
  
    },
    textview:{
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
    },
    profileview:{
      flexDirection:'column',
      alignSelf:'center',
      width:wp('90%'),
      height:hp('17%'),
      position:'absolute',
      backgroundColor:'#76c485',
      shadowColor: "black",
      shadowOffset: {
        width: 5,
        height: 3,
      },
      shadowOpacity: 2,
      shadowRadius: 10,
      elevation: 4,
      marginTop:'15%', justifyContent:'center', borderRadius:10,
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
    },
  });