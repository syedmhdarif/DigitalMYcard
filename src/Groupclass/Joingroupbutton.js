// import React, { useState, useEffect } from 'react';
// import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color, Alert} from 'react-native';
// import { Left, Right, Icon } from 'native-base';
// import PropTypes from 'prop-types';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import { db } from '../config/db'


// var user = auth().currentUser;


// let studentsRef = db.ref('/Students/' + user.uid+  '/Profile');

// export default class Joingroupbutton extends Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//           Students: [],
        
//           classcode: null,
//           classname: null,
//           section: null,
//           matricnum : null,
//           name : null,

      
           
//         };
//     }

//     componentDidMount() {
    
//         studentsRef.on('value', (snapshot) => {
//           let data = snapshot.val();
//               if(data){
//                 let firebaseData = Object.values(data);
//                 this.setState({Students: firebaseData},()=>{
//                   this.state.Students.map((element) => {
//                     this.setState({
//                       name: element.name,
//                       lname : element.lname,
//                       matricnum: element.matricnum,
                      
                     
                      
//                     });
                   
//                   }); 
//                 });
//               }
//          });
  
    
  
//       }

//     setName = (value) =>{
//         this.setState({ name: value });
//       }
    
//       setMatricNo = (value) =>{
//         this.setState({ matricnum: value });
//       }
  
//       setClassname = (value) =>{
//           this.setState({ classname: value });
//         }
  
//       setClasscode = (value) =>{
//           this.setState({ classcode: value });
//         }
      
//         setSection = (value) => {
//           this.setState({ section: value });
//         }
  
//         setMatricnum = (value) => {
//           this.setState({ matricnum: value });
//         }

//     saveData = () =>{
//         if(this.state.classcode &&  this.state.classname  && this.state.section && this.state.matricnum && this.state.name){
//           if(isNaN(this.state.matricnum)){
//             Alert.alert('Status','Invalid section!');
//           }
          
//            else{
//             addClass(this.state.classcode, this.state.classname, this.state.section, this.state.matricnum);
//             addClassreff(this.state.classcode, this.state.section, this.state.matricnum, this.state.name);
//              Alert.alert('Status','Inserted!');
//            }
//         } else{
//            Alert.alert('Status','Empty Field(s)!');
//         }
//       }
//     render(){
//         return(
//             <View>
//                 <TouchableOpacity style={styles.button}
//                           onPress={createTwoButtonAlert}>
//                               <Text style={styles.loginbutton}>Join Group</Text>
//                     </TouchableOpacity>
//             </View>
//         )
//     }

// }


// const styles = StyleSheet.create({
//     inputBox :{
//       // flexDirection:'row',
//       borderColor:'#595959',
//       borderWidth:1,
//       borderRadius:4,
//       width:wp('95%'),
//       paddingHorizontal:20,
//       paddingVertical:15,
//       marginVertical:5,   
//       fontWeight:'900',
//       color:'#595959', fontSize:18
//   },
//   classtext:{
//       flex:1,
//       height:hp('100%'),
//       backgroundColor:'#ffffff',
//       alignItems: 'center',
//   },
  
//   container: {
//       justifyContent: "space-around",
//       alignItems: "center",
//     },
//     button:{
//       justifyContent:'center',
//       backgroundColor :'#1c313a',
//       borderRadius :4,
//       paddingVertical:10,
//       marginTop:10, 
//       width :wp('90%'),
  
//      },
  
//      loginbutton:{
          
//           justifyContent:'center',
//           textAlign:'center',       
//           fontSize:16,
//           fontWeight:'500',
//           color: '#ffffff'
                  
//      },
//   });


import React, { useState, useEffect } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color, Alert} from 'react-native';
import { Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { db } from '../config/db';


var user = auth().currentUser;

const Joingroupbutton = (props)=>{

    const {
        classcode,
        section,
        gname,
        matricnum,
        name,

    }= props;

    function handleForm() {
        const classRef= db.ref('Classreff/'+ classcode + '_' + section +'/Group/' + gname + '/member/'+ matricnum)
        Alert.alert('Status','Joined!');
        
        const Joingroup = {
          
          name:name,
          matricnum:matricnum
        }
        classRef.set(Joingroup);
      
      };

      const navigation = useNavigation();

      function navigateToList() {
        navigation.navigate('Gmember', {  
         classcode: classcode,  
         section : section,
         gname : gname,
         matricnum : matricnum,
         name : name,  
    })  }

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Group joined!",
      "Inserted" , 
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


    
    
        return(
            <View>
                <View style={styles.inputBox}>
                    <View style={{flexDirection:'row',}}>
                        <Text style={{fontSize:23, color:'#595959'}}>{gname}</Text>

                        <Right>
                        <TouchableOpacity  onPress= {()=>navigateToList()}>
                            
                            <Icon style={{fontSize:23}} color='#595959' name="arrow-forward" />
                            
                        </TouchableOpacity>
                        </Right>

                    </View>
                        
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button}
                            onPress={handleForm}>
                                <Text style={styles.loginbutton}>Join Group</Text>
                        </TouchableOpacity>
                    </View>
        
                </View>
            </View>
        )
    
}

export default Joingroupbutton;

const styles = StyleSheet.create({
    inputBox :{
      // flexDirection:'row',
      borderColor:'#595959',
      borderWidth:1,
      borderRadius:4,
      width:wp('95%'),
      paddingHorizontal:20,
      paddingVertical:15,
      marginVertical:5,   
      fontWeight:'900',
      color:'#595959', fontSize:18
  },
  classtext:{
      flex:1,
      height:hp('100%'),
      backgroundColor:'#ffffff',
      alignItems: 'center',
  },
  
  container: {
      justifyContent: "space-around",
      alignItems: "center",
    },
    button:{
      justifyContent:'center',
      backgroundColor :'#1c313a',
      borderRadius :4,
      paddingVertical:10,
      marginTop:10, 
      width :wp('90%'),
  
     },
  
     loginbutton:{
          
          justifyContent:'center',
          textAlign:'center',       
          fontSize:16,
          fontWeight:'500',
          color: '#ffffff'
                  
     },
  });






//   const createTwoButtonAlert2 = () =>
//     Alert.alert(
//       "Group joined!",
//       "Group 2",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ],
//       { cancelable: false }
//     );

//     const createTwoButtonAlert3 = () =>
//     Alert.alert(
//       "Group joined!",
//       "Group 3",
     
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ],
//       { cancelable: false }
//     );