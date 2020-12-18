import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import MyClass from './MyClass';
import CreateClass from './CreateClass';
import JoinClass from './JoinClass';
import { HeaderTitle } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const IAttend=()=> {
    return (
        <Tab.Navigator initialRouteName='MyClass'
            backBehavior='initialRoute'
            tabBarOptions={{
            activeTintColor: '#ffffff',
            inactiveTintColor:'#b3b3b3',
            labelStyle: {  fontWeight: 'bold' },          
            style: { backgroundColor: '#199591',}, 
          }}>
            <Tab.Screen name="MyClass" component={MyClass}                
              options={{
              tabBarLabel: 'MyClass',
              tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="home" color={color} size={20} />
                ),}}     
            />
            <Tab.Screen name="Create Class" component={CreateClass} 
                options={{
              tabBarLabel: 'Create Class',
              tabBarIcon: ({ color, size }) => (
             <Icon name="newspaper" color={color} size={20} />),}}
            />
            <Tab.Screen name="Join Class" component={JoinClass} 
                options={{
              tabBarLabel: 'Join Class',
              tabBarIcon: ({ color, size }) => (
             <Icon name="add-circle" color={color} size={20} />),}}
            />
        </Tab.Navigator>
        
    )
}
export default IAttend;