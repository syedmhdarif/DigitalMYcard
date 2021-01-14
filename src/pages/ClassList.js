
import React, { Component,  useState, useEffect } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity,color, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/db';
import Testpage from './Testpage'; //StudentList

import { Left, Right } from 'native-base';
// import {removeClass} from '../services/DataServices';


var user = auth().currentUser;

const ClassList = ({Class})=>{
    const [getstudent3, setgetstudent3] = useState();
    const [getname3,setgetname3] = useState('');

    const [userDetail, setUserDetail] = useState({
       
        newclasscode: Class.classcode,
        newsection: Class.section,
      });

    const { newclasscode, newsection } = userDetail;

    const [handleToggle,setHandleToggle] = useState(false);

    useEffect(() =>{
        const getName = db.ref('Students/'+ user.uid + '/Class/'+ Class.classcode + '_' + Class.section );
        getName.once("value",(snapshot) =>{
    
            
            setgetname3(snapshot.val());
            
            
        });console.log(getname3);
    },[]);




    useEffect(() => {
        const getstudent = db.ref('/Classreff/' + Class.classcode + '_'+ Class.section + '/studentlist/');
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

    
    
    
   const navigation = useNavigation();

        function navigateToList() {
            navigation.navigate('Chapter', {  
             itemId : getname3.classcode,  
             otherParam : getname3.section,  
        })  }
        function navigateToList2() {
            navigation.navigate('StudentView');
        }

        function removeClass(newclasscode, newsection) {
            var classcode = newclasscode ;
            var section =  newsection ;
            const classdel= db.ref('Students/'+user.uid + '/Class/' + classcode + '_'+section)
            // const namedel= fire.database().ref('Classreff/' +classcode+ "_"+section+ '/studentlist/' + matricnum)
            
            classdel.remove();
            // namedel.remove();
            console.log(classcode);
        };

        console.log(Class.classcode)
        console.log(Class.section)



        const deleteConfirmation= (newclasscode, newsection)=> {
            Alert.alert(
              'Status', 
              'Are you sure you want to delete this student?',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => removeClass(newclasscode, newsection)}
              ],
              { cancelable: false }
              );
          }
    
        return(
            
 
           
            <View style={styles.classtext}>

            <TouchableOpacity 
                newclasscode = {newclasscode}
                newsection = {newsection}
                onPress= {()=>navigateToList()}
                onLongPress={(newclasscode, newsection) => {deleteConfirmation(newclasscode, newsection)}}
                >
           
                <View style={styles.textedit} >
                    <View   style={{flexDirection:'column'}}>
                    <Text style={{fontSize:18, color:'#595959'}}>{Class.classname} </Text>
                    <Text style={{fontSize:18, color:'#595959'}}>{newclasscode} - Section {Class.section}</Text>
                    
                    </View>
                
                    <Right>

                    <Icon color='#595959' name="arrow-forward" />
                    </Right>
                    
                    
                </View>
            
          </TouchableOpacity>
            
              {/* <Text  >
                {getstudent3 
                            ? getstudent3.map((Students, index) => 
                            <Testpage Students={Students} key={index}/>)
                        : ''}
             </Text>         */}
             
                        
            </View>
            
    
           
        )
   
}

export default ClassList;

const styles = StyleSheet.create({
  
    classtext:{
        
        backgroundColor: "#ffffff",
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