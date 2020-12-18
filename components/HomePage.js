//import liraries
import React, { Component } from 'react';

import { View, Text, StyleSheet, } from 'react-native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfilePage from './ProfilePage';
import home from './home';
import Search from './search';


const Tab = createMaterialBottomTabNavigator();

const HomePage=()=> {
  return (
    
      <Tab.Navigator initialRouteName='home'
        
            activeColor="#f0edf6"
            inactiveColor="#505050"
            barStyle={{  height:50, backgroundColor: 'black' }}>
        <Tab.Screen name="Home" component={home}
            options={{
              
                
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-home" color={color} size={20} />
                ),
              }} />
        <Tab.Screen name="search" component={Search} 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                  <Icon name="search-sharp" color={color} size={20} />
                ),
              }}/>
              
        <Tab.Screen name="ProfilePage" component={ProfilePage} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <Icon name="person-sharp" color={color} size={20} />
                ),
              }}/>
        
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({

});
export default HomePage;