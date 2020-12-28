
import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import * as firebase from 'firebase';
import CreateClass2 from '../pages/CreateClass2';

const Newdataservice = () => {
    const [classname, setClassName] = useState('');
    const [classcode, setClassCode] = useState('');
    const [section, setSection] = useState(''); 
    const [matricnum, setMatricNum] = useState('');
    const [creator, setCreator] = useState('');
    const [studentlist] = useState ('');
    
    
    var user = auth().currentUser; 
    
    
    function handleForm() {
      const classRef= db.ref('/Students/'+ user.uid + '/Class/' + classcode + '_'+ section )
      const createRef= db.ref('Classref/' + classcode + '_'+section+'/studentlist/')
      const addName= db.ref('Classref/' +classcode+ '_'+section+ '/studentlist/' + matricnum)
      
      const createclass = {
        classname,
        classcode,
        section,
        matricnum,
      }
      classRef.set(createclass);
    
      const reff = {
        creator:user.uid,
      }
      createRef.set(reff);
  
      const adname = {
        matricnum:matricnum,
        name:user.uid,
    
      }
      addName.set(adname);
  
  };
    
  
    return(
      
        <CreateClass2 
        classname={classname} 
        setClassName={setClassName} 
        classcode={classcode} 
        setClassCode={setClassCode}
        section={section}
        setSection={setSection}
        matricnum={matricnum}
        setMatricNum={setMatricNum} 
        handleForm={handleForm}
         />
        
      
        
    
    );
    }
  export default Newdataservice;