import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function IAttend() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Ewallet() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="IAttend" component={IAttend} />
        <Tab.Screen name="Ewallet" component={Ewallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import homescreen from './src/pages/homescreen';
import Login from './src/pages/Login.js';
import Form from './src/components/Form';
import IAttend from './src/pages/IAttend';
import Ewallet from './src/pages/Ewallet';

const Stack = createStackNavigator();

function App() {
  return (
    
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none" >
        <Stack.Screen  name="Login" component={Login}  />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen  name="homescreen" component={homescreen} />
        <Stack.Screen name="IAttend" component={IAttend} />
        <Stack.Screen name="Ewallet" component={Ewallet} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor :'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  headercontent:{
    justifyContent:'center',

  }


  
});