// import React, { Component } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// export default class IDcard extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('IAttend')} title="IAttend" />
//         </View>
//         <Text style={styles.button}>DIGITAL MATRIC CARD</Text>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('Ewallet')} title="Ewallet" />
//         </View>
        
          
            
          

//           {/* <View >
//             <Button style={{marginHorizontal:60}} onPress={() => this.props.navigation.navigate('Form')} title="Form" />
//           </View> */}
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',   
//     backgroundColor: '#F5FCFF',
//     textAlignVertical: 'top',
//     flex: 1,
//     marginVertical: 12,
//     flexDirection: 'row'
//   },
  // button: {
  //   paddingHorizontal:10,
      
  // }
// });

import * as React from 'react';
import { Text, View, useWindowDimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';

import IAttend from '../pages/IAttend';
import Ewallet from '../pages/Ewallet';
import IDcard2 from '../pages/ID card2';
import { color } from 'react-native-reanimated';
import ProfileInfo from '../components/ProfileInfo';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" 
      inactiveTintColor = "#ffffff"
      activeTintColor = '#ccffb3'
     
      onPress={()=> auth().signOut()} />
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();


const IDcard=()=> {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="IDcard2"
        drawerContentOptions={{

          activeTintColor: '#ccffb3',
          itemStyle: { marginVertical: 5 },
          labelStyle:{color:'#ffffff'}
        }}
        drawerStyle={{
        backgroundColor: '#1f2e2e',
      }}
      overlayColor="transparent">
      <Drawer.Screen name="IDcard" component={IDcard2} />
      <Drawer.Screen name="IAttend" component={IAttend} />
      <Drawer.Screen name="Ewallet" component={Ewallet} />
      <Drawer.Screen name="Profile" component={ProfileInfo} />
    </Drawer.Navigator>
    
  );
}
export default IDcard;