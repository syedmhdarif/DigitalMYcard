import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking, Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';


export default class Qrscanner extends Component{

  IfScaned = e =>{
    Linking.openURL(e.data).catch(err=>Alert.alert("Invalid QR code", e.data));
  }

  render(){
    return(
      <QRCodeScanner
      containerStyle={{backgroundColor:'#FFF', }}
        onRead={this.IfScaned}
        reactivate={true}
        permissionDialogMessage="need permission to access camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor:'#ffffff', borderRadius:10}}
        bottomContent={
          <TouchableOpacity>
            <Text style={{fontSize:21,color:'black', marginTop:30}}>Scan QR code</Text>
          </TouchableOpacity>
        }/>
    )

  }
}