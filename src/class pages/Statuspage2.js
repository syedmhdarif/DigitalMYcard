import React, {Component,  useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, color, ImageBackground  } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
// import { View } from 'react-native-animatable';
import PropTypes from 'prop-types';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
var user = auth().currentUser;

export default function Statuspage2 ({Status}) {

    return(
        <View>
            <Text>
                {Status.status}
            </Text>
        </View>
    )
    
}