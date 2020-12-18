import React, { Component } from 'react';
import { TextInput, View, 
    ScrollView, Text, StyleSheet, 
    TouchableOpacity, Button, Alert, color, 
    ImageBackground, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import JoinClass2 from './JoinClass2';

function Ewallet ({navigation}){
    
        return(
            <View>
                <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
            <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
            
            <ImageBackground style={{ width:wp("100%"),height:hp("100%"),}} source={require('../images/bg.jpg')}>
      <View style={{alignItems:'center'}}>



        <View style={styles.container2}> 
          
          <Image
                    style={{ width:50, height:60, marginTop:20}}
                    source={require('../images/wallet.png')}/> 
        
            <Text style={{borderBottomWidth:0.8,
        width:wp('95%'),
        marginVertical:10,
         paddingBottom:5, 
         textAlign:"center", 
         fontWeight:"bold", 
         fontSize: 25, 
         color:'white'}}>
                My Balance: RM 3.50
            </Text>

        <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('Pay')}>
                    <Text style={styles.textedit}>
                        Pay
                    </Text>
                </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Reload')} >
                    <Text style={styles.textedit}>
                        Reload
                    </Text>
         </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Give')}>
                    <Text style={styles.textedit}>
                        Transfer
                    </Text>
         </TouchableOpacity>
         

        </View>
       </View>
         <Text style={{borderBottomWidth:0.8,
        width:wp('95%'),
        marginVertical:20,
         paddingBottom:3, 
         textAlign:"left", 
         fontWeight:"bold", 
         fontSize: 18, 
         color:'white'}}>
             Payment History
         </Text>
      </View>

      <View>
        
      </View>
      </ImageBackground>
            </View>
           
        )
    
}
export default Ewallet; 

const styles = StyleSheet.create({
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
        borderWidth:1,
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
    
})

// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking, Alert
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';


// export default class Ewallet extends Component{

//   IfScaned = e =>{
//     Linking.openURL(e.data).catch(err=>Alert.alert("Invalid QR code", e.data));
//   }

//   render(){
//     return(
//       <QRCodeScanner
//       containerStyle={{backgroundColor:'#FFF', flex:1}}
//         onRead={this.IfScaned}
//         reactivate={true}
//         permissionDialogMessage="need permission to access camera"
//         reactivateTimeout={10}
//         showMarker={true}
//         markerStyle={{borderColor:'#ffffff', borderRadius:10}}
//         bottomContent={
//           <TouchableOpacity>
//             <Text style={{fontSize:21,color:'black', marginTop:30}}>Scan QR code</Text>
//           </TouchableOpacity>
//         }/>
//     )

//   }
// }