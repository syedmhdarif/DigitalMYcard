// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   StyleSheet, 
//   Text,
//   TouchableOpacity,
//   Linking, Alert
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';


// export default class Qrscanner extends Component{

//   IfScaned = e =>{
//     Linking.openURL(e.data).catch(err=>Alert.alert("QR code", e.data));
//   }

  
  
//   render(){
   
//     return(
//       <QRCodeScanner
//       containerStyle={{backgroundColor:'#FFF', }}
//         onRead={this.IfScaned}
//         flashMode={RNCamera.Constants.FlashMode.torch}
//         reactivate={true}
//         permissionDialogMessage="need permission to access camera"
//         reactivateTimeout={10}
//         showMarker={true}
//         markerStyle={{borderColor:'#ffffff', borderRadius:10}}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity>
//             <Text style={{fontSize:21,color:'blue', marginTop:30}}>Scan QR code</Text>
//           </TouchableOpacity>
//         }/>
//     )

//   }
// }

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777'
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000'
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)'
//   },
//   buttonTouchable: {
//     padding: 16
//   }
// });



import React, { Component, Fragment, useState, useEffect } from 'react';

import {
  AppRegistry,
  StyleSheet, 
  Text,
  TouchableOpacity,
  Linking, Alert, Dimensions, View,  
  Button,
  StatusBar,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {Attendclass} from '../services/DataServices';
import {getDistance, getPreciseDistance} from 'geolib';


var user = auth().currentUser;

let studentsRef = db.ref('/Students/' + user.uid+  '/Profile');


export default class Qrscanner extends Component{
  constructor(props) {
    super(props);
    this.state = {
        scan: false,
        ScanResult: false,
        result: null,
        results: null,
        classcode: null,
        classname: null,
        section: null,
        day: null,
        month : null,
        year : null,
        matricnum : null,
        name : null,
        latitudes : 0,
        longitudes : 0,
        
    };
}

state = {
    location: null
};

findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const location = JSON.stringify(position);

            this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
};




onSuccess = (e) => {
  Linking.openURL(e.data).catch(err=>Alert.alert("QR code", e.data));
    const check = e.data.substring();
    var array = check.split(',');
    var classcode = array[0];
    var section = array[1];
    var classname = array[2];
    var day = array[3];
    var month = array[4];
    var year = array[5];
    var latitudes = array[6];
    var longitudes = array[7];
    console.log(array);
    console.log(array[0]);
    console.log(year);
    console.log(longitudes);
    console.log(latitudes);


    console.log('scanned data' + check);
    this.setState({
        results : array,
        result: e,
        scan: false,
        ScanResult: true,
        classcode: classcode,
        classname: classname,
        section: section,
        day: day,
        month : month,
        year : year,
        latitudes : latitudes,
        longitudes : longitudes,
    })
    if (check === 'http') {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));


    } else {
        this.setState({
            results : array,
            result: e,
            scan: false,
            ScanResult: true,
            classcode: classcode,
            classname: classname,
            section:    section,
            day: day,
            month : month,
            year : year,
            latitudes : latitudes,
            longitudes : longitudes,

        })
    }

}

activeQR = () => {
    this.setState({
        scan: true
    })
}
scanAgain = () => {
    this.setState({
        scan: true,
        ScanResult: false
    })
}

componentDidMount() {
    
    studentsRef.on('value', (snapshot) => {
      let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({Students: firebaseData},()=>{
              this.state.Students.map((element) => {
                this.setState({
                  
                  matricnum: element.matricnum,
                  name : element.name
                  
                 
                  
                });
               
              }); 
            });
          }
     });



  }


setClasscode = (value) =>{
  this.setState({ classcode: value });
}

setSection = (value) => {
  this.setState({ section: value });
}
setClassname = (value) =>{
  this.setState({ classname: value });
}
setDay= (value) =>{
  this.setState({ day: value });
}
setMonth = (value) =>{
  this.setState({ month: value });
}
setYear = (value) =>{
  this.setState({ year: value });
}
setMatricnum = (value) => {
    this.setState({ matricnum: value });
  }
  setName = (value) => {
    this.setState({ name: value });
  }


saveData = () =>{
    const { scan, ScanResult, result, results, classcode, section, 
        classname, day, month, year, matricnum, name, longitudes, latitudes} = this.state

        var dis = getDistance(
            {latitude: latitudes, longitude: longitudes},
            {latitude: 3.2570119, longitude: 101.7399330},
          );
        var diss = dis/1000
        //   alert(
        //     `Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`
        //   );
   
    if(diss <= 0.300){
        Attendclass(classcode, section, day, month, year, matricnum, name);
    Alert.alert('Status','Recorded Successfully !!');
    console.log(diss);
    }
    else{
             Alert.alert('Status','Out of range!!');
          }
    
    
//   if(this.state.classcode && this.state.section && this.state.day && this.state.month && this.state.year){
//     if(isNaN(this.state.section)){
//       Alert.alert('Status','Invalid section!');
//       console.log(this.state.month)
//     }
    
//      else{  
//       Attendclass(this.state.classcode && this.state.section && this.state.day && this.state.month && this.state.year);
//       Alert.alert('Status','Attended!');
//       console.log(this.state.month)
//     }
    
//   } else{
//      Alert.alert('Status','Empty Field(s)!');
//   }
}



render() {
    const { scan, ScanResult, result, results, classcode, section, classname, day, month, year, latitudes, longitudes} = this.state
    const desccription = 'The attendance report must be generated from the University system.'
    const desccription2 = 'When a student has been absent for twenty percent (20%) of lectures, the student should be informed that he / she will be barred from the registered course of the semester'
    const desccription3 = 'Based on the recommendation from the Kulliyyah, the DDAA Office will issue the barring letter to the student and a copy is sent to the HOD / Course Instructor / Finance Division / Parents and Student’s File'
    

    return (
        <View style={styles.scrollViewStyle}>
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <Text style={styles.textTitle}>Scan for Your Attendance! </Text>
                {!scan && !ScanResult &&
                    <View style={styles.cardView} >
                    <TouchableOpacity onPress={this.findCoordinates}>
					
					<Text>Location: {this.state.location} {latitudes}</Text>
				</TouchableOpacity>
                        <Text numberOfLines={8} style={styles.descText}>{desccription} </Text>
                        <Text numberOfLines={8} style={styles.descText}>{desccription2}</Text>
                        <Text numberOfLines={8} style={styles.descText}>{desccription3}</Text>

                        <TouchableOpacity onPress={this.activeQR} style={styles.buttonTouchable}>
                            <Text style={styles.buttonTextStyle}>Click to Scan ! </Text>
                        </TouchableOpacity>

                    </View>
                }

                {ScanResult &&
                    <Fragment>
                        <Text style={styles.textTitle1}>Result !</Text>
                        <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                            
                            <Text style={{textAlign:'center', marginBottom:10}}>Result : {result.data}</Text>
                            <Text style={{fontSize:14}}>Classcode : {classcode} Classname : {classname} </Text>
                            <Text style={{fontSize:14}}>({latitudes}, {longitudes})</Text>
                            <Text style={{fontSize:14}}>Date : {day}/{month}/{year}</Text>
                            
                            {/* <Text numberOfLines={1}>RawData: {result.rawData}</Text> */}
                            <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
                                <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.saveData} style={styles.buttonTouchable3}>
                                <Text style={styles.buttonTextStyle}>Attend!</Text>
                            </TouchableOpacity>

                        </View>
                    </Fragment>
                }


                {scan &&
                
                    <QRCodeScanner
                        reactivate={true}
                        showMarker={true}
                        ref={(node) => { this.scanner = node }}
                        onRead={this.onSuccess}
                        
                        permissionDialogMessage="need permission to access camera"
                        reactivateTimeout={10}
                        bottomContent={
                            <View >
                                <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.scanner.reactivate()}>
                                    <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.setState({ scan: false })}>
                                    <Text style={styles.buttonTextStyle}>Stop Scan</Text>
                                </TouchableOpacity>
                            </View>

                        }
                        
                    />
                    
                   
                }
                
                {/* <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.setState({ scan: false })}>
                   <Text style={styles.textTitle}>Stop Scan</Text>
                </TouchableOpacity>
                </View> */}
            </Fragment>
        </View>

    );
}
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#199591'
},

textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    color: 'white'
},
textTitle1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'white'
},
cardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 1.5,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white'
},
scanCardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white'
},
buttonScan: {
    width: 42,

},
descText: {
    padding: 16,
    textAlign: 'justify',
    fontSize: 14
},


highlight: {
    fontWeight: '700',
},

centerText: {
    
    fontSize: 18,
    padding: 32,
    color: '#777',
},
textBold: {
    fontWeight: '500',
    color: '#000',
},
buttonTouchable: {
    fontSize: 21,
    backgroundColor: '#1f2e2e',
    marginTop: 32,

    width: deviceWidth - 62,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44
},
buttonTouchable3: {
  fontSize: 21,
  backgroundColor: '#199591',
  marginTop: 32,

  width: deviceWidth - 62,
  justifyContent: 'center',
  alignItems: 'center',
  height: 44
},
buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
}
});