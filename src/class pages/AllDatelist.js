// import React, {Component,  useState, useEffect} from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, color, ImageBackground  } from "react-native";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
// // import { View } from 'react-native-animatable';
// import PropTypes from 'prop-types';
// import { db } from '../config/db';
// import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';
// var user = auth().currentUser;

// var user = auth().currentUser;


// const AllDatelist = ({Class}) => {
//     const [getdate, setgetdate] = useState();
//     const [getname3,setgetname3] = useState('');
//     const [myClassLists, setmyClassLists] = useState('');

//     // const {
//     //     itemId, otherParam,

//     // }=props;
   
//     const navigation = useNavigation();

//         function navigateToList() {
//             navigation.navigate('StudentAttend')  }
//         function navigateToList2() {
//             navigation.navigate('StudentView');
//         }

      

//         useEffect(() =>{
//             const getNamess = db.ref('Classreff/' + Class.classcode + '_'+ Class.section+'/Attendance/'+ 
//             Class.day+ '_'+ Class.month+ '_'+ Class.year+'/member/1712475');
//             getNamess.once("value",(snapshot) =>{
        
                
//                 setmyClassLists(snapshot.val());
                
                
//             });console.log(myClassLists); 
//         },[]);
    

       
 
//         return(
//             <View >

//             <TouchableOpacity
//             style={styles.textedit}
//             onPress={() => navigateToList()}  >
//                 <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:0}} >
//                     {Class.day}/{Class.month}/{Class.year}                 
//                 </Text>
                

//                 <Text style={{fontSize:15, paddingTop:4, marginLeft:120, color:'#595959' }}> 
//                     {myClassLists.status}
//                 </Text>
//             </TouchableOpacity>

//             </View>
            
                   
//              )

// }

// export default AllDatelist;

// const styles = StyleSheet.create({
//     classtext:{
        
        
//         alignItems: 'center',
//     },
//     textedit:{ 
//         flexDirection:'row',
//         borderBottomWidth:0.4,
//         width:wp('90%'),
//         marginVertical:5,   
//         paddingVertical:15,
        
    
//       },
//       fab: {
//         position: 'absolute',
//         margin: 16,
//         right: 0,
//         bottom: 10,
//       },
// });


import React, {Component,  useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, color, ImageBackground  } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
// import { View } from 'react-native-animatable';
import PropTypes from 'prop-types';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Statuspage from './Statuspage';


var user = auth().currentUser;


const AllDatelist = ({Class}) => {
    const [getdate, setgetdate] = useState();
    const [getname3,setgetname3] = useState('');
    const [getMatrics, setmyClassLists] = useState('');
    const [getMatricss, setmyClassListss] = useState('');

    // const {
    //     itemId, otherParam,

    // }=props;
   
    const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('StudentAttend')  }
        function navigateToList2() {
            navigation.navigate('StudentView');
        }

      

        useEffect(() =>{
            const getMatric = db.ref('Students/' + user.uid + '/profile/');
            getMatric.once("value",(snapshot) =>{
        
                
                setmyClassLists(snapshot.val());
                
                
            });console.log(getMatrics); 
            console.log(getMatrics.matricnum); 
        },[]);

        // useEffect(() => {
        //     const myClassRef = db.ref( '/Classreff/' + classcode + '_'+ section + '/Attendance/' + 
        //     day + '_' + month + '_'+ year + '/member/' + matricnum );
        //     myClassRef.on("value",(snapshot) => {
        //         const myClassF = snapshot.val();
        //         console.log(snapshot);
        //         const statuslist=[]; 
        //         for (let id in myClassF){
        //             statuslist.push(myClassF[id]);
                   
        //         }
        //         setStatusList(statuslist);

        //     });
        // },[]);

        useEffect(() =>{
            const getMatrice = db.ref('/Classreff/' + Class.classcode + '_'+ Class.section + '/Attendance/' + 
            Class.day + '_' + Class.month + '_'+ Class.year);
            getMatrice.once("value",(snapshot) =>{
        
                
                setmyClassListss(snapshot.val());
                
                 
            });console.log(getMatricss); 
            console.log(getMatricss.month);
            
        },[]);
    

       
 
        return(
            <View >
            {/* <Text>{Class.day}</Text>
            <Text> {Class.classcode} {getMatrics.matricnum} </Text> */}
            <Statuspage 
            day = {Class.day}
            month = {Class.month}
            year = {Class.year}
            classcode = {Class.classcode}
            section ={Class.section}
            matricnum = {getMatrics.matricnum}

            />

            </View>
            
                   
             )

}

export default AllDatelist;

const styles = StyleSheet.create({
    classtext:{
        
        
        alignItems: 'center',
    },
    textedit:{ 
        flexDirection:'row',
        borderBottomWidth:0.4,
        width:wp('90%'),
        marginVertical:5,   
        paddingVertical:15,
        
    
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
      },
});
  
  