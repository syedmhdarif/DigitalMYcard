import React, { Component, Fragment, useState, useEffect } from 'react';

import {
  AppRegistry,
  StyleSheet, 
  Text,
  TouchableOpacity,
  Linking, Alert, Dimensions, View,  
  
  StatusBar,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Chapter({route}){
    const { itemId, otherParam } = route.params;

    const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('Qrscanner',{
                itemId : itemId,  
                otherParam : otherParam,  
            });  
        }
        function navigateToList2() {
            navigation.navigate('Record',{
                itemId : itemId,  
                otherParam : otherParam,  
            });
        }

        return(
            <View>
                
            </View>
        )
}