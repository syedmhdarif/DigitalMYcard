import React, { Component, useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';
    import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'

export default function Listpeople ({Class}){
    return(
        <View>
            <Text> {Class.matricnum}/{Class.name} </Text>
        </View>
    )
}