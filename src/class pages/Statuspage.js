import React, {Component,  useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, color, ImageBackground, Alert  } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
// import { View } from 'react-native-animatable';
import PropTypes from 'prop-types';
import { db } from '../config/db';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import Statuspage2 from './Statuspage2';
var user = auth().currentUser;


const Statuspage = (props) => {

    const [latitude, setLatitude] =useState('')
    const [longitude, setLongitude] =useState('')
  
  
    const{
        day,month,year,classcode,section,matricnum
    } = props;
    

    var classcodes = classcode;
    var sections = section;
    var matricnums = matricnum;
    var days = day;
    var months = month;
    var years = year;

    const [getdate, setgetdate] = useState();
    const [getname3,setgetname3] = useState('');
    const [statuslist, setStatusList] = useState('');
    const [getMatrics, setmyClassLists] = useState('');


    const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('StudentAttend')  }
        function navigateToList2() {
            navigation.navigate('StudentView');

        }

        // function seeStatus(){
        //     const getStatus = db.ref('/Classreff/' + classcodes + '_'+ sections + '/Attendance/' + 
        //     days + '_' + months + '_'+ years + '/member/' + matricnums);

        //     getStatus.once("value",(snapshot) =>{
                    
                            
        //         setStatusList(snapshot.val());
                 
        //     });console.log(statuslist);
        //     console.log(classcode);
        //         console.log(section);
        //         console.log(day);
        //         console.log(month);
        //         console.log(year);
        //         console.log(matricnum);

           
            
        //     Alert.alert("QR code", );

        // }

        
        useEffect(() =>{
           
        
           const getStatus = db.ref('Classreff/'+ classcode + '_' + section + '/Attendance/' + day + '_'
           + month + '_' + year + '/member/1718247');

            getStatus.once("value",(snapshot) =>{ 
                    
                            
                setStatusList(snapshot.val());
                 
            });console.log(statuslist);
            // console.log(classcode);
            //     console.log(section);
            //     console.log(day);
            //     console.log(month);
            //     console.log(year);
            //     console.log(matricnum); 
            
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
        //         console.log(statuslist);
        //         console.log(classcode);
        //         console.log(section);
        //         console.log(day);
        //         console.log(month);
        //         console.log(year);
        //         console.log(matricnum);
    
        //     });
        // },[]);

  
        return(
            <View >
            

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => navigateToList()}  >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:10,}} >
                    {day}/{month}/{year}
                </Text>
                {/* <TouchableOpacity  onPress={() => seeStatus()}>
                    <Text>Status</Text>
                </TouchableOpacity> */}

                {/* <Text style={{fontSize:15, paddingTop:4, marginLeft:120, color:'#595959' }}>
                {statuslist 
                    ? statuslist.map((Status, index) => <Statuspage2 Status={Status} key={index} 
                       
                    />)
                    : ''} 
                     
                </Text> */}

                <Text style={{fontSize:15, paddingTop:4, marginLeft:140, color:'blue' , fontWeight: 'bold'}}>
                [{statuslist.status}] 
                     
                </Text>

                {/* <Statuspage2
                    classcode = {classcodes}
                    section = {sections}
                    day = {days}
                    month = {months}
                    year = {years}
                    matricnum = {matricnums}
                    status = {statuslist.status}

                /> */}
                

                
            </TouchableOpacity>

            </View>
            
                   
             )

}

export default Statuspage;

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