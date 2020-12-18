import * as firebase from 'firebase';


let config = {
    apiKey: "AIzaSyDuxnf7v0liiO60pbtYGpxIjzu_8OMQ_iA",
    authDomain: "digitalmycard-7cb52.firebaseapp.com",
    databaseURL: "https://digitalmycard-7cb52-default-rtdb.firebaseio.com",
    projectId: "digitalmycard-7cb52",
    storageBucket: "digitalmycard-7cb52.appspot.com",
    messagingSenderId: "1048811636243",
    appId: "1:1048811636243:web:abdeb620a7233d1224e1e6",
    measurementId: "G-VBGG9ZFZXJ"
  
  };
  let app = firebase.initializeApp(config);

//To Await 5 seconds to insert a new user

    // firebase.database().ref('users/003').set(
    //     {
            
    //         name: 'Pheng Sengvuthy 004',
    //         age: 24
    //     }
    // ).then(() => {
    //     console.log('INSERTED !');
    // }).catch((error) => {
    //     console.log(error);
    // });


export const db = app.database();

// import * as React from 'react';
// import App from '/Users/SyedAriff_Jr/Desktop/FYP/fypproject/App';
// import firebase from '@react-native-firebase/app';
// import Auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import OneSignal from 'react-native-onesignal';
// import functions from '@react-native-firebase/functions';
// import messaging from '@react-native-firebase/messaging';
// import dynamicLinks from '@react-native-firebase/dynamic-links';
// import inAppMessaging from '@react-native-firebase/in-app-messaging';
// import analytics from '@react-native-firebase/analytics';


// const firebaseConfig = {
//   apiKey: "AIzaSyDQ5k4KHBMnw99RyXuPGw19pagzECKjkQQ",
//   authDomain: "fypproject-6211e.firebaseapp.com",
//   databaseURL: "https://fypproject-6211e.firebaseio.com",
//   projectId: "fypproject-6211e",
//   storageBucket: "fypproject-6211e.appspot.com",
//   messagingSenderId: "698962627980",
//   appId: "1:698962627980:web:beb41e777064dd03dadaa9",
//   measurementId: "G-63PT2FKJNJ"

// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// export {
//   firebase,
//   Auth,
//   database,
//   firestore,
//   storage,
//   functions,
//   messaging,
//   dynamicLinks,
//   inAppMessaging,
//   analytics,
// };

// const db = () => {
//   const onReceived = notification => {
//     console.log('Notification received: ', notification);
//   };

//   const onOpened = openResult => {
//     console.log('Message: ', openResult.notification.payload.body);
//     console.log('Data: ', openResult.notification.payload.additionalData);
//     console.log('isActive: ', openResult.notification.isAppInFocus);
//     console.log('openResult: ', openResult);
//   };

//   const onIds = device => {
//     console.log('Device info: ', device);
//   };

//   const setupCloudMessaging = async () => {
//     const token = await messaging().getToken();
//     //  alert(token);
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//     }
//   };

//   const handleDynamicLink = link => {
//     // alert(link.url);
//   };
//   React.useEffect(async () => {
//     await inAppMessaging().setMessagesDisplaySuppressed(true);
//     const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
//     dynamicLinks()
//       .getInitialLink()
//       .then(link => {
//         alert(link.url);
//       });
//     setupCloudMessaging();
//     OneSignal.init('37c392d3-3799-46bc-ac37-e38da7fc740f', {
//       kOSSettingsKeyAutoPrompt: false,
//       kOSSettingsKeyInAppLaunchURL: false,
//       kOSSettingsKeyInFocusDisplayOption: 2,
//     });
//     OneSignal.addEventListener('received', onReceived);
//     OneSignal.addEventListener('opened', onOpened);
//     OneSignal.addEventListener('ids', onIds);

//     // It will trigger when app was in background
//     messaging().onNotificationOpenedApp(remoteMessage => {
//       //alert(JSON.stringify(remoteMessage));
//     });

//     // It will trigger when app was in quit mode
//     messaging().getInitialNotification(remoteMessage => {
//       // alert(JSON.stringify(remoteMessage));
//     });

//     // If App is in foreground mode
//     messaging().onMessage(remoteMessage => {
//       // alert(JSON.stringify(remoteMessage));
//     });

//     return () => {
//       OneSignal.removeEventListener('received', onReceived);
//       OneSignal.removeEventListener('opened', onOpened);
//       OneSignal.removeEventListener('ids', onIds);
//       unsubscribe();
//     };
//   }, []);
//   return <App />;
// };

// export default db;