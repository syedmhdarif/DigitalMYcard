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
import Gmember from './src/Groupmember/Gmember';

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
        <Stack.Screen name="Gmember" component={Gmember} />
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




// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   TextInput, 
  
// } from 'react-native';
// import { Router, Scene } from 'react-native-router-flux';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import {
//   Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import IDcard from './src/pages/ID Card';
// import IDcard2 from './src/pages/ID card2';
// import Login from './src/pages/Login.js';
// import Form from './src/pages/Form';
// import IAttend from './src/pages/IAttend';
// import Ewallet from './src/pages/Ewallet';
// import LoginPage from './src/pages/LoginPage';
// import Loading from './src/pages/Loading';
// import MyClass from './src/pages/MyClass';
// import MyClass2 from './src/pages/MyClass2';
// import CreateClass from './src/pages/CreateClass';
// import JoinClass from './src/pages/JoinClass';
// import Info4993 from './src/class pages/Info4993';
// import Chapter from './src/class pages/chapter';
// import Student from './src/class pages/student';
// import Record from './src/class pages/record';
// import Qrscanner from './src/components/qrscanner';
// import Myclasslist from './src/student/Myclasslist';
// import Studentlist from './src/student/Studentlist';
// import StudentAttend from './src/student/StudentAttend';
// import CreateClass2 from './src/pages/CreateClass2';
// import JoinClass2 from './src/pages/JoinClass2';
// import SplashS from './src/components/SplashS';
// import LogoProfile from './src/student/LogoProfile';

// import Pay from './src/wallet/Pay';
// import Reload from './src/wallet/Reload';
// import Give from './src/wallet/Give';
// import Transfer from './src/wallet/Transfer';
// import Reload1 from './src/wallet/Reload1';
// import StudentView from './src/student/StudentView';
// // import DataServices from './src/services/DataServices';
// import StudentList from './src/components/StudentList';
// import ListScreen from './src/pages/ListScreen';
// import Matric from './src/pages/Matric';
// import MatricCard from './src/pages/MatricCard';
// import Newdataservice from './src/services/Newdataservice';
// import Anothertest from './src/Groupclass/Anothertest';

// import ClassList from './src/pages/ClassList';


// const Stack = createStackNavigator();

// function App() {
//   return (
    
   
//     <Router>
    
//       {/* <Stack.Navigator initialRouteName="SplashS" headerMode="none" screenOptions={{
//         headerTintColor: '#ffffff',
//         headerStyle: { backgroundColor: '#00b359' },
//       }}> */}
//       <Scene key="root">
    
//       <Scene key="SplashS" title="SplashS" component={SplashS} />
//       <Scene key="LoginPage" title="LoginPage" component={LoginPage} />
//         <Scene key="Login" title="Login" component={Login}  />
//         <Scene key="Form" title="Form" component={Form} />
//         <Scene key="Loading" title="Loading" component={Loading} />
//         <Scene  key="IDCard" title="IDcard" component={IDcard} />
//         <Scene  key="IDcard2" title="IDcard2" component={IDcard2} />
//         <Scene key="IAttend" title="IAttend" component={IAttend} />
//         <Scene key="Ewallet" title="Ewallet" component={Ewallet} />
//         <Scene key="MyClass" title="MyClass" component={MyClass} />
//         <Scene key="CreateClass" title="CreateClass" component={CreateClass} />
//         <Scene key="JoinClass" title="JoinClass" component={JoinClass} />
//         <Scene key="Info4993" title="Info4993" component={Info4993} />
//         <Scene key="Chapter" title="Chapter" component={Chapter} />
//         <Scene key="Student" title="Student" component={Student} />
//         <Scene key="Record" title="Record" component={Record} />
//         <Scene key="Qrscanner" title="Qrscanner" component={Qrscanner} />
//         <Scene key="Myclasslist" title="Myclasslist" component={Myclasslist} />
//         <Scene key="Studentlist" title="Studentlist" component={Studentlist} />
//         <Scene key="StudentAttend" title="StudentAttend" component={StudentAttend} />
//         <Scene key="CreateClass2" title="CreateClass2" component={CreateClass2} />
//         <Scene key="JoinClass2" title="JoinClass2" component={JoinClass2} />
//         <Scene key="LogoProfile" title="LogoProfile" component={LogoProfile} />
//         <Scene key="Pay" title="Pay" component={Pay} />
//         <Scene key="Reload" title="Reload" component={Reload} />
//         <Scene key="Give" title="Give" component={Give} />
//         <Scene key="Transfer" title="Transfer" component={Transfer} />
//         <Scene key="Reload1" title="Reload1" component={Reload1} />
//         <Scene key="StudentView" title="StudentView" component={StudentView} />
//         {/* <Stack.Screen name="DataServices" component={DataServices} />
//         <Stack.Screen name="StudentList" component={StudentList} />
//         <Stack.Screen name="ListScreen" component={ListScreen} /> */}
        
//         <Scene key="StudentList" title="StudenyList" component={StudentList} />
//         <Scene key="MyClass2" title="MyClass2" component={MyClass2} />
//         <Scene key="Matric" title="Matric" component={Matric} />
//         <Scene key="MatricCard" title="MatricCard" component={MatricCard} />
//         <Scene key="Newdataservice" title="Newdataservice" component={Newdataservice} />
//         <Scene key="ClassList" title="ClassList" component={ClassList} />
//         <Scene key="Anothertest" title="Anothertest" component={Anothertest} />

//         </Scene>
//       {/* </Stack.Navigator> */}

//       {/* <Router>
//         <Scene key="root">
          
//           <Scene key="MyClass2" component={MyClass2} left={()=>null} title="Mureed" />
//           <Scene key="Info4993" component={Info4993} left={()=>null} title="Mureed" />
//         </Scene>
//       </Router> */}
//     </Router>
  
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container : {
//     backgroundColor :'#455a64',
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   headercontent:{
//     justifyContent:'center',

//   }


  
// });
