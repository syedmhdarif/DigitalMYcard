import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

import Alertbutton2 from '../class pages/alertbutton2';
import { addClassreff, addClass } from '../services/DataServices';
import auth from '@react-native-firebase/auth';
import { db } from '../config/db'


var user = auth().currentUser;


let studentsRef = db.ref('/Students/' + user.uid+  '/Profile');



export default class JoinClass2 extends Component{
    componentDidMount() {
        loc(this); 
      }
      
      componentWillUnMount() {
        rol();
      }
    constructor(props) {
        super(props);

        this.state = {
          Students: [],
        
          classcode: null,
          classname: null,
          section: null,
          matricnum : null,
          name : null,

      
           
        };
    }
    

    componentDidMount() {
    
      studentsRef.on('value', (snapshot) => {
        let data = snapshot.val();
            if(data){
              let firebaseData = Object.values(data);
              this.setState({Students: firebaseData},()=>{
                this.state.Students.map((element) => {
                  this.setState({
                    name: element.name,
                    lname : element.lname,
                    matricnum: element.matricnum,
                    
                   
                    
                  });
                 
                }); 
              });
            }
       });

  

    }
  
    setName = (value) =>{
      this.setState({ name: value });
    }
  
    setMatricNo = (value) =>{
      this.setState({ matricnum: value });
    }

    setClassname = (value) =>{
        this.setState({ classname: value });
      }

    setClasscode = (value) =>{
        this.setState({ classcode: value });
      }
    
      setSection = (value) => {
        this.setState({ section: value });
      }

      setMatricnum = (value) => {
        this.setState({ matricnum: value });
      }

    


    saveData = () =>{
        if(this.state.classcode &&  this.state.classname  && this.state.section && this.state.matricnum && this.state.name){
          if(isNaN(this.state.section)){
            Alert.alert('Status','Invalid section!');
          }
          
           else{
            addClass(this.state.classcode, this.state.classname, this.state.section, this.state.matricnum);
            addClassreff(this.state.classcode, this.state.section, this.state.matricnum, this.state.name);
             Alert.alert('Status','Inserted!');
           }
        } else{
           Alert.alert('Status','Empty Field(s)!');
        }
      }


    render(){
        return(
            
            <View style={styles.classtext}>
            <Text style=
                {{fontSize:25, fontWeight:'300', marginTop:10, color:'#666666'}}>
                    Join Class
            </Text>

            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="class name"
                color='black'
                onChangeText={this.setClassname}
                 />

            
            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"              
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="class code" 
                color='black'
                onChangeText={this.setClasscode}
                
                />
            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"              
                
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="section" 
                color='black'
                onChangeText={this.setSection}
                
                />

            

            <TouchableOpacity style={styles.button} onPress={this.saveData}>
                <Text style={styles.loginbutton}>Join</Text>
             </TouchableOpacity>
            {/* <Alertbutton2/> */}
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    inputBox :{
        width :wp('90%'),
        borderBottomWidth:0.4,
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#ffffff',
        marginVertical:8,
    },
    classtext:{
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        justifyContent:'center',
        backgroundColor :'#1f2e2e',
        borderRadius :4,
        paddingVertical:10,
        marginTop:30, 
        marginBottom:10,
        width :wp('90%'),
    
       },
       loginbutton:{
        
        justifyContent:'center',
        textAlign:'center',       
        fontSize:16,
        fontWeight:'500',
        color: '#ffffff'
                
   },


})