
import React, { Component,  useState, useEffect } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color} from 'react-native';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/db';
import Testpage from './Testpage'; //StudentList


var user = auth().currentUser;

const ClassList = ()=>{
    const [getstudent3, setgetstudent3] = useState();

    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate('Info4993');
    }
    function navigateToList2() {
        navigation.navigate('StudentView');
    }


    useEffect(() => {
        const getstudent = db.ref('/Students/' + user.uid + '/Class/');
        getstudent.on("value",(snapshot) => {
            const getstudent2 = snapshot.val();
            console.log(snapshot);
            const getstudent3=[];
            for (let id in getstudent2){
                getstudent3.push(getstudent2[id]);
               
            }
            setgetstudent3(getstudent3);
            console.log(getstudent3);
    
        });
    },[]);
    
        return(
            
            
        
               
            <View style={styles.classtext}>
            <Text style={{
                textAlign:'center', fontWeight:'300', fontSize:25, color:'#595959', marginVertical:10}}>
                My Class List
            </Text>
       
            <TouchableOpacity 
                    onPress= {()=>navigateToList()}>
            <View>
                {getstudent3 
                            ? getstudent3.map((Students, index) => <Testpage Students={Students} key={index}/>)
                        : ''}
            </View>
            </TouchableOpacity>
                       
                </View>
         

                
                
           
        )
   
}

export default ClassList;

const styles = StyleSheet.create({
    classtext:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    textedit:{ 
        flexDirection:'row',
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
      header:{
        flexDirection:'row',
        width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
        shadowColor: "black",
        shadowOffset: {
          width: 5,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        alignItems:'center',
        paddingHorizontal:22
      }
     
});