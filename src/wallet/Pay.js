import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';


function Pay ({navigation}){

    

    
    return(

<LinearGradient colors={['#004d37','#00996e', '#4dffcc',]} style={styles.linearGradient}>

      <View>
<Text style={{ alignSelf:"center",paddingTop: 40}}>
Scan barcode or QR code
</Text>

<TouchableOpacity  onPress={() => navigation.navigate('Qrscanner')}>
                    <Text style={styles.textedit2}>
                        SCAN 
                    </Text>
                </TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('Reload1')}>
                    <Text style={styles.textedit}>
                        SCAN FROM GALLERY
                    </Text>
                </TouchableOpacity>
      </View>
      </LinearGradient>
    )
  
}

export default Pay;

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
        borderColor:'gold',
        textAlign:"center",
  
        alignSelf:"center",
        borderWidth:2.5,
        borderRadius:20,
        backgroundColor:"white",
        width:wp('80%'),
        paddingHorizontal:5,
        paddingVertical:4,
        marginVertical:5,
        marginHorizontal:8, 
        fontWeight:'900',
        color:'black', 
        fontSize:18
    
      },
      linearGradient:{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
       
      },
      textedit2:{ 
        borderColor:'gold',
        textAlign:"center",
        marginTop:50,
        alignSelf:"center",
        borderWidth:2.5,
        borderRadius:20,
        backgroundColor:"white",
        width:wp('80%'),
        paddingHorizontal:5,
        paddingVertical:4,
        marginVertical:5,
        marginHorizontal:8, 
        fontWeight:'900',
        color:'black', 
        fontSize:18
    
      },
});