/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput, 
  
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IDcard from './src/pages/ID Card';
import IDcard2 from './src/pages/ID card2';
import Login from './src/pages/Login.js';
import Form from './src/pages/Form';
import IAttend from './src/pages/IAttend';
import Ewallet from './src/pages/Ewallet';
import LoginPage from './src/pages/LoginPage';
import Loading from './src/pages/Loading';
import MyClass from './src/pages/MyClass';
import MyClass2 from './src/pages/MyClass2';
import CreateClass from './src/pages/CreateClass';
import JoinClass from './src/pages/JoinClass';
import Info4993 from './src/class pages/Info4993';
import Chapter from './src/class pages/chapter';
import Student from './src/class pages/student';
import Record from './src/class pages/record';
import Qrscanner from './src/components/qrscanner';
import Myclasslist from './src/student/Myclasslist';
import Studentlist from './src/student/Studentlist';
import StudentAttend from './src/student/StudentAttend';
import CreateClass2 from './src/pages/CreateClass2';
import JoinClass2 from './src/pages/JoinClass2';
import SplashS from './src/components/SplashS';
import LogoProfile from './src/student/LogoProfile';

import Pay from './src/wallet/Pay';
import Reload from './src/wallet/Reload';
import Give from './src/wallet/Give';
import Transfer from './src/wallet/Transfer';
import Reload1 from './src/wallet/Reload1';
import StudentView from './src/student/StudentView';
// import DataServices from './src/services/DataServices';
import StudentList from './src/components/StudentList';
import ListScreen from './src/pages/ListScreen';
import Matric from './src/pages/Matric';
import MatricCard from './src/pages/MatricCard';
import Newdataservice from './src/services/Newdataservice';
import Anothertest from './src/Groupclass/Anothertest';

import ClassList from './src/pages/ClassList';


const Stack = createStackNavigator();

function App() {
  return (
    
   
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="SplashS" headerMode="none" screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#00b359' },
      }}>
      <Stack.Screen name="SplashS" component={SplashS} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen   name="Login" component={Login}  />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen  name="ID Card" component={IDcard} />
        <Stack.Screen  name="IDcard2" component={IDcard2} />
        <Stack.Screen name="IAttend" component={IAttend} />
        <Stack.Screen name="Ewallet" component={Ewallet} />
        <Stack.Screen name="MyClass" component={MyClass} />
        <Stack.Screen name="CreateClass" component={CreateClass} />
        <Stack.Screen name="JoinClass" component={JoinClass} />
        <Stack.Screen name="Info4993" component={Info4993} />
        <Stack.Screen name="Chapter" component={Chapter} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Qrscanner" component={Qrscanner} />
        <Stack.Screen name="Myclasslist" component={Myclasslist} />
        <Stack.Screen name="Studentlist" component={Studentlist} />
        <Stack.Screen name="StudentAttend" component={StudentAttend} />
        <Stack.Screen name="CreateClass2" component={CreateClass2} />
        <Stack.Screen name="JoinClass2" component={JoinClass2} />
        <Stack.Screen name="LogoProfile" component={LogoProfile} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="Reload" component={Reload} />
        <Stack.Screen name="Give" component={Give} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Reload1" component={Reload1} />
        <Stack.Screen name="StudentView" component={StudentView} />
        {/* <Stack.Screen name="DataServices" component={DataServices} />
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="ListScreen" component={ListScreen} /> */}
        
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="MyClass2" component={MyClass2} />
        <Stack.Screen name="Matric" component={Matric} />
        <Stack.Screen name="MatricCard" component={MatricCard} />
        <Stack.Screen name="Newdataservice" component={Newdataservice} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="Anothertest" component={Anothertest} />
      </Stack.Navigator>

      {/* <Router>
        <Scene key="root">
          
          <Scene key="MyClass2" component={MyClass2} left={()=>null} title="Mureed" />
          <Scene key="Info4993" component={Info4993} left={()=>null} title="Mureed" />
        </Scene>
      </Router> */}
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



//CONVO APP
// import React, { Fragment } from "react";

// import NavContainer from "./srcv/navigation";
// import Loader from "./srcv/component/loader";
// import { StoreProvider } from "./srcv/context/store";
// import { StatusBar } from "react-native";

// console.disableYellowBox = true;

// export default () => {
//   return (
//     <StoreProvider>
//       <StatusBar barStyle="light-content" />
//       <NavContainer />
//       <Loader />
//     </StoreProvider>
//   );
// };










// import React from 'react';
// import { View, Text } from 'react-native';
// import firebase from 'firebase';

// class App extends React.Component {

//     componentWillMount() {

//         // To Configure react native app with cloud of Google Firebase database !
//         var config = {
//           apiKey: "AIzaSyDQ5k4KHBMnw99RyXuPGw19pagzECKjkQQ",
//           authDomain: "fypproject-6211e.firebaseapp.com",
//           databaseURL: "https://fypproject-6211e.firebaseio.com",
//           projectId: "fypproject-6211e",
//           storageBucket: "fypproject-6211e.appspot.com",
//           messagingSenderId: "698962627980",
//           appId: "1:698962627980:web:beb41e777064dd03dadaa9",
//           measurementId: "G-63PT2FKJNJ"
        
//         };
//         firebase.initializeApp(config);

//         // To select data from firebase every time data has changed !
//         firebase.database().ref('users').on('value', (data) => {
//             console.log(data.toJSON());
//         })

//         // To Await 5 seconds to insert a new user
//         setTimeout(() => {
//             firebase.database().ref('users/004').set(
//                 {
//                     name: 'Pheng Sengvuthy 004',
//                     age: 24
//                 }
//             ).then(() => {
//                 console.log('INSERTED !');
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }, 5000);

//         // To Update a user
//         firebase.database().ref('users/004').update({
//             name: 'Pheng Sengvuthy'
//         });

//         // To Remove a user
//         firebase.database().ref('users/004').remove();

//     }

//     render() {
//         return (
//             <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
//                 <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
//                     Welcome To ------
//                     {'\n'}Our Google Firebase Database !
//                 </Text>
//             </View>
//         )
//     }
// }

// export default App;






// import React, { Component } from 'react';
// import 'react-native-gesture-handler';
// import { View, Text, StyleSheet, ImageBackground } from 'react-native';
// import LoginForm from './components/LoginForm';
// import HomePage from './components/HomePage';
// import Loading from './components/Loading';
// import LoginPage from './components/LoginPage';
// import EmailAndPassword from './components/EmailAndPassword';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProfilePage from './components/ProfilePage';
// import home from './components/home';
// import Search from './components/search';
// import SplashScreen from './components/SplashScreen';
// import ProfileGallery from './components/ProfileGallery';
// import Register from './components/Register';
// import RegisterPage from './components/RegisterPage';
// import WelcomePage from './components/WelcomePage';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName='SplashScreen' headerMode="none">
//     <Stack.Screen name="SplashScreen" component={SplashScreen} />
//       <Stack.Screen name="LoginPage" component={LoginPage} />
//       <Stack.Screen name="Register" component={Register} />
//       <Stack.Screen name="WelcomePage" component={WelcomePage} />
//       <Stack.Screen name="RegisterPage" component={RegisterPage} />
//       <Stack.Screen name="HomePage" component={HomePage} />
//       <Stack.Screen name="EmailAndPassword" component={EmailAndPassword} />
//       <Stack.Screen name="Loading" component={Loading} />
//       <Stack.Screen name="LoginForm" component={LoginForm} />
//       <Stack.Screen name="ProfilePage" component={ProfilePage} />
//       <Stack.Screen name="home" component={home} />
//       <Stack.Screen name="Search" component={Search} />
//       <Stack.Screen name="ProfileGallery" component={ProfileGallery} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
